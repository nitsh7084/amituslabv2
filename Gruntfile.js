module.exports = function(grunt){


grunt.initConfig({

pkg: grunt.file.readJSON('package.json'),

concat : {
js:{
src:['jquery.min.js','home.js'],
dest:'home.min.js'
},
css:{
src:['home.css','responsive.css','proxima_nova.css','fonts2.css'],
dest:'home.min.css'
}

},


uglify : {

dist : {
files:{
'home.min.js' : ['jquery.min.js','home.js']
}
}

},

jshint: {

beforeconcat : ['jquery.min.js','home.js']

},


imagemin: {
jpgs:{
options:{
progressive:true,
optimizationLevel:5
},

files:[{
expand:true,
cwd:'images',
src:['*.jpg','*.png'],
dest:'imagesmin/'
}]
}
},



mocha : {
all : ['index.html'],
options:{
run:true
}
}


});


grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-mocha');

grunt.registerTask('default',['concat','uglify']);


}