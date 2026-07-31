export function up(pgm) {
  pgm.createTable("members", {
    id: {
      type: "serial",
      primaryKey: true,
      notNull: true
    },
    fName: {
      type: "varchar(100)",
      notNull: true
    },
    mName: {
      type: "varchar(100)"
    },
    lName: {
      type: "varchar(100)",
      notNull: true
    },
    avatar_url: {
      type: "text"
    },
    phone_number: {
      type: "varchar(100)"
    },
    email: {
      type: "varchar(200)"
    },
    address: {
      type: "text"
    },
    created_at: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp")
    }
  });
}

export function down(pgm) {
  pgm.dropTable("members");
}
