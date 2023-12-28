var city_names=["karachi", "lahore", "islamabad","quetta", "peshawar"];

var selected_cities_arr=city_names.slice(2,4);

for(i=0; i<selected_cities_arr.length;i++){
    document.write(selected_cities_arr[i]+ " , ");
}
