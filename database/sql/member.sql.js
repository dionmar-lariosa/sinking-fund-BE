const MemberSql = {
  members: (filter) => {
    return {
      text: /* sql */ `
        SELECT
          *
        FROM
          members
        WHERE
          (
            $1::text IS NULL
            OR CONCAT_WS(' ', f_name, m_name, l_name) ILIKE '%' || $1 || '%'
          )
      `,
      values: [filter]
    };
  },

  member: (id) => {
    return {
      text: /* sql */ `
        SELECT
          *
        FROM
          members
        WHERE
          id = $1;
      `,
      values: [id]
    };
  },

  newMember: (payload) => {
    return {
      text: /* sql */ `
        INSERT INTO
          members (
            f_name,
            m_name,
            l_name,
            avatar_url,
            phone_number,
            email,
            address
          )
        VALUES
          ($1, $2, $3, $4, $5, $6, $7)
        RETURNING
          *;
      `,
      values: [
        payload.f_name,
        payload.m_name,
        payload.l_name,
        payload.avatar_url,
        payload.phone_number,
        payload.email,
        payload.address
      ]
    };
  },

  updateMember: (payload) => {
    return {
      text: /* sql */ `
        UPDATE members
        SET
          f_name = $1,
          m_name = $2,
          l_name = $3,
          avatar_url = $4,
          phone_number = $5,
          email = $6,
          address = $7
        WHERE
          id = $8
        RETURNING
          *;
      `,
      values: [
        payload.f_name,
        payload.m_name,
        payload.l_name,
        payload.avatar_url,
        payload.phone_number,
        payload.email,
        payload.address,
        payload.id
      ]
    };
  }
};

export default MemberSql;
