import axios from "axios";
export default function Images(props) {
  const pexelsApisUrl = `https://api.pexels.com/v1/search?query=${props.word}&per_page=2`;

  axios
    .get(pexelsApisUrl, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_PEXELS_API_KEY}`,
      },
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.error(error);
    });
  return <div></div>;
}
