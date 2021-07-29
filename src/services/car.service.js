import http from "../http-common"

//Data service that uses axios to submit HTTP request to Spring Boot
class CarDataService{
    /* getAll(){
        return http.get(`/cars`)
    }

    getCar(id){
        return http.get(`/findCar/${id}`)
    }

    create(data){
        return http.post(`/add`, data)
    }
    
    deleteAll(){
        return http.delete(`/delete/`)
    }

    deleteCar(id){
        return http.delete(`/delete/${id}`)
    }
 */

    getAllCars(){
        return http.get('/cars');
    }

    postCar(){
        return http.post('/car');
    }

    deleteCar(){

        return http.post('/deleteCar');

    }

    updateCar(){

        return http.post('/updateCar');

    }

}

export default new CarDataService();