'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.findProducts = async () => {
    const res = await Product.find({
        active: true
    }, 'title price slug');
    return res;
}

exports.findBySlug = async (slug) => {
    const res = await Product.findOne({
        slug: slug,
        active: true
    }, 'title description price slug tags');
    return res;
}

exports.findById = async (id) => {
    const res = await Product.findById(id);
    return res;
}

exports.findByTag = async (tag) => {
    const res = await Product.find({
        tags: tag,
        active: true
    }, 'title description price slug tags');
    return res;
}

exports.create = async (data) => {
    var product = new Product(data);
    await product.save();
}

exports.update = async (id, data) => {
    await Product
        .findByIdAndUpdate(id, {
            $set: {
                title: data.title,
                description: data.description,
                slug: data.slug,
                price: data.price
            }
        });
}

exports.delete = async (id) => {
    await Product
        .findByIdAndRemove(id)
}