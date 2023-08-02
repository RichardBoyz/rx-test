import axios from "axios";
import { throwError, forkJoin,catchError } from "rxjs";

const api1 =
  "https://ef9d2f76-8f96-458f-9ae1-c94db2fe81a0.mock.pstmn.io/api1";
const api2 =
  "https://ef9d2f76-8f96-458f-9ae1-c94db2fe81a0.mock.pstmn.io/fail";
const api3 =
  "https://ef9d2f76-8f96-458f-9ae1-c94db2fe81a0.mock.pstmn.io/api3";


export function setTestApi(element) {
  const request1$=axios.get(api1).then(response=>response.data).catch(error=> throwError(()=>error));
  const request2$=axios.get(api2).then(response=>response.data).catch(error=> throwError(()=>error));
  const request3$=axios.get(api3).then(response=>response.data).catch(error=> throwError(()=>error));

  forkJoin([request1$,request2$,request3$]).subscribe({
      next:([data1,data2,data3])=>{
        console.log('Data from API 1:', data1);
        console.log('Data from API 2:', data2);
        console.log('Data from API 3:', data3.message);
      },
      error:(error)=>{
        console.log('error occured')
      },
      complete:()=>{
        console.log('數據流已經結束')
      }
    },
  );
}
