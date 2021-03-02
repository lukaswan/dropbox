$.get('http://localhost:8080/uploadedFiles', (data)=>{
    data.map(file=>$('#list-div').append(`<a href='http://localhost:8080/uploadedFiles/${file}'>${file}</a><br>`))});
