import user from "../model/user.js";
export const alldata = async (req, res) => {
  try {
    const data = await user.find({});
    res.status(200).send({
      success: true,
      data,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      message: "Error in product count",
      error,
      success: false,
    });
  }
};

export const singleUserData = async (req, res) => {
  try {
    const data = await user.findOne({ username: req.params.username });
    res.status(200).send({
      success: true,
      message: "Single User data Fetched",
      data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Eror while getitng single user data",
      error,
    });
  }
};
