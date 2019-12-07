import 'whatwg-fetch'

export default class Http{
  static async request(methods,url,data={}){
    if(methods === 'GET'){
      
        let str = "";
        for(var key in data){
            str += "&"+key+"="+data[key];
        }
        url = url+'?'+str.substr(1);
      
      // console.log(url)
      let resposnse = await window.fetch(url);
      let res =  await resposnse.json();
      return res
    }
    if(methods === 'POST'){
      try {
        let resposnse =  await window.fetch(url,{
          headers:{
            'Content-Type': 'application/json'
          },
          body:JSON.stringify(data)
        })
        let res =  await resposnse.json()
        return res
      } catch (error) {
        return error
      }
    }
  }
  static get(url,data){
    return this.request('GET',url,data)
  }
  static post(url,data){
    return this.request('POST',url,data)
  }
}