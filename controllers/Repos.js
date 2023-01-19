import axios from "axios";

export const getRepos = async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${req.query.username}/repos`
    );
    if (response && response.data.length !== 0) {
      res.status(response.status).json({ data: response.data });
    } else {
      res.status(404).json({ messsage: "Not Found" });
    }
  } catch (error) {
    res
      .status(error.response.status)
      .json({ message: error.response.data.message });
  }
};
