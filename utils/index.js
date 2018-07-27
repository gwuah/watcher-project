const googleTrends = require("google-trends-api");

exports.checkInterestOverTime = async function({ interest, startTime, endTime, geo}) {
  if (!interest) { throw new Error("You have to pass an interest prop") };

  const query = {
    keyword: interest,
    startTime: startTime,
    endTime: endTime || new Date(Date.now()),
    geo: geo || "GH"
  }

  try {
    const strData = await googleTrends.interestOverTime(query);
    const response = JSON.parse(strData);
    const lengthOfTimeline = response.default.timelineData.length;
    console.log(response.default.timelineData[lengthOfTimeline-1])
    return response.default.timelineData[lengthOfTimeline-1]

  } catch (e) {
    console.log("there was an error at line 20", e)
  }
}

// exports.checkInterestByRegion = async function({ interest, startTime, endTime, geo }) {
//   if (!interest) { throw new Error("You have to pass an interest prop")};
//   if (!geo) { throw new Error("You have to pass a geo prop")};



//   const query = {
//     keyword: interest,
//     startTime: startTime,
//     endTime: endTime || new Date(Date.now()),
//     geo: geo || "GH"
//   }

//   try {
//     const strData = await googleTrends.interestByRegion(query);
//     const response = JSON.parse(strData);
//     return response.default.geoMapData
//   } catch (e) {
//     console.log("there was an error at line 40", e)
//   }

// }

// exports.relatedQueries = async function({ keyword, startTime, endTime, geo }) {
//   if (!keyword) { throw new Error("You have to pass an keyword prop")};

//   const query = {
//     keyword: keyword,
//     startTime: startTime,
//     endTime: endTime || new Date(Date.now()),
//     geo: geo || "GH"
//   }

//   try {
//     const strData = await googleTrends.relatedQueries(query);
//     const response = JSON.parse(strData);
//     return response.default.geoMapData
//   } catch (e) {
//     console.log("there was an error at line 40", e)
//   }

// }
