
module.exports = (MongoDb) => ({
  Query: {
    getUsers: async () => {
      try {
        const res = await MongoDb.User.aggregate([
          {
            $match: {
              isDeleted: { $ne: true }
            }
          }
        ])

        return {
          success: true,
          res,
          message: "all users"
        }
      } catch (error) {
        return {
          success: false,
          error,
          message: "user not get"
        }
      }
    }
  },
  Mutation: {
    addUser: async (_, { user }) => {
      try {
        const res = await MongoDb.User.create({
          ...user,
          hireDtae: Date.now(),
        })

        return {
          success: true,
          res,
          message: "user created successfully"
        }
      } catch (error) {
        return {
          success: false,
          error,
          message: `user did not created ${error?.message}`
        }
      }
    },

    updateUser: async (_, { user }) => {
      try {
        const res = await MongoDb.User.findOneAndUpdate(
          {
            _id: user._id
          },
          {
            ...user,
          },
          { new: true }
        )

        if (res) {
          return {
            success: true,
            res,
            message: "user updated successfully"
          }
        } else {
          return {
            success: false,
            message: "User not found"
          };
        }

      } catch (error) {
        return {
          success: false,
          error,
          message: `user did not updated ${error?.message}`
        }
      }
    },

    deleteUser: async (_, { userId }) => {
      try {
        const res = await MongoDb.User.findOneAndDelete({
          _id: userId
        });

        if (res) {
          return {
            success: true,
            message: "User deleted successfully"
          };
        } else {
          return {
            success: false,
            message: "User not found"
          };
        }
      } catch (error) {
        return {
          success: false,
          error,
          message: `Failed to delete user: ${error.message}`
        };
      }
    }


  },
});