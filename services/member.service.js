import MemberSql from "../database/sql/member.sql.js";
import { pool } from "../database/pool.js";

const MemberService = {
  members: async () => {
    const client = await pool.connect();

    try {
      const result = await client.query(MemberSql.members);
      return result.rows;
    } finally {
      client.release();
    }
  },

  member: async (id) => {
    const client = await pool.connect();

    try {
      const result = await client.query(MemberSql.member(id));
      return result.rows[0];
    } finally {
      client.release();
    }
  },

  newMember: async (body) => {
    const client = await pool.connect();

    try {
      const result = await client.query(MemberSql.newMember(body));
      return result.rows[0];
    } finally {
      client.release();
    }
  },

  updateMember: async (id, body) => {
    const client = await pool.connect();

    try {
      const result = await client.query(MemberSql.updateMember({ id, ...body }));
      return result.rows[0];
    } finally {
      client.release();
    }
  }
};

export default MemberService;
