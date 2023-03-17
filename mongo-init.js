db.auth("admin-user", "admin-password")

db = db.getSiblingDB("test")

db.createUser(
        {
            user: "test",
            pwd: "test",
            roles: [
                {
                    role: "readWrite",
                    db: "test"
                }
            ]
        }
);