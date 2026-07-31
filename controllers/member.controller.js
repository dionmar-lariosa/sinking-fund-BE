import MemberService from "../services/member.service.js";

const MemberController = {
  members: async (req, res, next) => {
    try {
      const data = await MemberService.members();
      res.json(data);
    } catch (error) {
      next(error);
    }
  }
};

export default MemberController;
