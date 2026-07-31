import MemberSql from "../database/sql/member.sql.js";
import { pool } from "../database/pool.js";

const MemberService = {
  members: async (req, res, next) => {
    const client = await pool.connect();

    try {
      const result = await client.query(MemberSql.selectAll);
      return result.rows;
    } finally {
      client.release();
    }
  }
};

export default MemberService;
