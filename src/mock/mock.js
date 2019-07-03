import Mock from 'mockjs'
const Random = Mock.Random;

const createDate = () => {
   let arr = [];
   for(let i=0; i<100; i++) {
     let newArr = {
       title: Random.csentence(3,15),
       image: Random.image('300x250', 'mock图片'),
       userName: Random.cname(),
       time: Random.date()+ '' + Random.time()
     }
     arr.push(newArr);
   }
   return {
     arr: arr
   }
}

Mock.mock('/news/index','post',createDate)

