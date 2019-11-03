
import axios from 'react-native-axios';


export default jsonData = async function(url, sendData) {
  sendData["ref"] = "5380f5dbcc3b1021f93ab24c3a1aac24"
  console.log("url " + url)
  console.log("sendData " + JSON.stringify(sendData))

  return await axios.get('https://www.jsonbulut.com/json/' + url, {
    params: sendData
  }).then(function (res) {
    console.log(res);
    return res.data
  })
  .catch(function (error) {
    console.log(error);
  });
}


// product json services
export const product = async function(data) {
  const url = "product.php"
  const dt = await jsonData(url, data)
  return dt
}

