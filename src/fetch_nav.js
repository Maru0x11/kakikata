// An async function that retrieves html data from nav.html and returns it

export async function FetchNav() {

  try{
    const res = await fetch('../nav.html');
    if(!res.ok){
      console.log(`Http error: ${res.status}`);
      return null; //TODO: handle this error properly
    }

    const data = await res.text();
    return data;

  }catch(error){
    console.error("Fetch error: ",error);
    return null; //TODO: handle this error properly
  }
};
