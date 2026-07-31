import MemberService from "../services/member.service.js";

const MemberController = {
  members: async (req, res, next) => {
    try {
      const data = await MemberService.members();
      res.json(data);
    } catch (error) {
      next(error);
    }
  },

  member: async (req, res, next) => {
    try {
      const data = await MemberService.member(req.params.id);
      res.json(data);
    } catch (error) {
      next(error);
    }
  },

  newMember: async (req, res, next) => {
    try {
      const data = await MemberService.newMember(req.body);
      res.status(201).json(data);
    } catch (error) {
      next(error);
    }
  },

  updateMember: async (req, res, next) => {
    try {
      const data = await MemberService.updateMember(req.params.id, req.body);
      res.json(data);
    } catch (error) {
      next(error);
    }
  }
};

export default MemberController;
