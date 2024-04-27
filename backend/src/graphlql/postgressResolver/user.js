
module.exports = (userRepository) => ({
  Query: {
    getUsers: async () => {
      try {
        const users = await userRepository.find({ where: { isDeleted: false } });

        return {
          success: true,
          users,
          message: "All users retrieved successfully"
        };

      } catch (error) {
        return {
          success: false,
          error,
          message: "user not get"
        }
      }
    },

    getUser: async (_, { userId }) => {
      try {

        if (userId) {
          const res = await userRepository.findOne({ where: { id: userId } });

          return {
            success: true,
            res,
            message: "user delete successfully"
          }
        }

        return {
          success: false,
          message: "user id must required "
        }

      } catch (error) {
        return {
          success: false,
          error,
          message: `user did not updated ${error?.message}`
        }
      }
    }
  },
  Mutation: {
    addUser: async (_, { user }) => {
      try {

        const res = await userRepository.save(user)

        if (res)
          return {
            success: true,
            message: "User added successfully",
            user: res
          };

        return {
          success: false,
          message: "User did not added ",
        };
      } catch (error) {
        return {
          success: false,
          error,
          message: "user not get"
        }
      }


    },

    updateUser: async (_, { user }) => {
      try {

        if (user?.id) {
          const res = await userRepository.update(user?.id, user);

          return {
            success: true,
            res,
            message: "user updated successfully"
          }
        }

        return {
          success: false,
          message: "user id must required "
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

        if (userId) {
          const res = await userRepository.delete(userId);

          return {
            success: true,
            res,
            message: "user delete successfully"
          }
        }

        return {
          success: false,
          message: "user id must required "
        }

      } catch (error) {
        return {
          success: false,
          error,
          message: `user did not updated ${error?.message}`
        }
      }
    }

  },
});