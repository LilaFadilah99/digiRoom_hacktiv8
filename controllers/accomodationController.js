const e = require("express");
const { Accomodation } = require("../models");
class AccomodationController {
  static async getAllAccomodation(request, response, next) {
    let opt = {};
    let role = request.userData.role;
    let id = request.userData.id;

    if (role !== "admin") {
      opt.where = { UserId: id };
    }
    try {
      const accomodation = await Accomodation.findAll(opt);
      if (accomodation.length === 0) {
        throw { name: "NotFound" };
      } else {
        response.status(200).json(accomodation);
      }
    } catch (error) {
      next(error);
    }
  }
  static async addAccomodation(request, response, next) {
    const { name, facility, roomCapacity, imgUrl, location, price, UserId, TypeId } = request.body;
    try {
      const newAccomodation = await Accomodation.create({
        name,
        facility,
        roomCapacity,
        imgUrl,
        location,
        price,
        UserId,
        TypeId,
      });
      response.status(201).json(newAccomodation);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  static async getAccomodationById(request, response, next) {
    let { id } = request.params;
    try {
      const accomodationById = await Accomodation.findByPk(id);
      if (!accomodationById) {
        throw { name: "NotFound" };
      } else {
        response.status(200).json(accomodationById);
      }
    } catch (error) {
      next(error);
    }
  }
  static async updateAccomodation(request, response, next) {
    let { id } = request.params;
    let { name, facility, roomCapacity, imgUrl, location, price, UserId, TypeId } = request.body;
    try {
      const updateAccomodation = await Accomodation.update(
        {
          name,
          facility,
          roomCapacity,
          imgUrl,
          location,
          price,
          UserId,
          TypeId,
        },
        { where: { id }, returning: true }
      );
      if (!updateAccomodation) {
        throw { name: "NotFound" };
      } else {
        response.status(200).json(updateAccomodation);
      }
    } catch (error) {
      next(error);
    }
  }
  static async deleteAccomodation(request, response, next) {
    let { id } = request.params;
    try {
      const deleteAccomodation = await Accomodation.destroy({ where: { id } });
      if (!deleteAccomodation) {
        throw { name: "NotFound" };
      } else {
        response.status(200).json(`success delete user id ${id}`);
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = AccomodationController;
