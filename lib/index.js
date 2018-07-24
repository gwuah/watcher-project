const googleTrends = require("google-trends-api");
const fs = require("fs");

async function checkPattern({ interest, startTime, endTime, geo}) {
  if (!interest) { throw new Error("You have to pass an interest prop")};

  const query = {
    keyword: interest,
    startTime: startTime,
    endTime: endTime || new Date(Date.now()),
    geo: geo || "GH"
  }

  try {
    const res = await googleTrends.interestOverTime(query);
    const lengthOfTimeline = res.default.timelineData.length;
    console.log(res.default.timelineData[lengthOfTimeline-1]);

    // return latest data set
    return res.default.timelineData[lengthOfTimeline-1]
  } catch (e) {
    console.log("there was an error at line 30", e)
  }

}

module.exports = {
  checkPattern
};
