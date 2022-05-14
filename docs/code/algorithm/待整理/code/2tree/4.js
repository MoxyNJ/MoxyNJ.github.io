// @ts-nocheck
var subsets = function (nums) {
  let len = nums.length;
  let res = [];
  let curArr = [];
  dfs(0);
  return res;

  function dfs(index) {
    if (index === len) {
      res.push(curArr.slice());
      return;
    }
    curArr.push(nums[index]);
    dfs(index + 1);
    curArr.pop();
    dfs(index + 1);
  }
};

subsets([1, 2, 3]);