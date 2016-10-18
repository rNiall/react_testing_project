module.exports = function(grunt) {
	grunt.initConfig({
		// running `grunt less` will compile once
		less: {
			development: {
				options: {
					paths: ["./src/css"],
					yuicompress: true
				},
			files: {
			    "./src/css/style.css": "./src/css/style.less"
			}
		}
	},
	// running `grunt watch` will watch for changes
	watch: {
		files: 
		    ["./src/css/*.less","./bower_components/bootstrap/less/*.less"],
		tasks: 
		    ["less"],
		options: {
            livereload: true                        //reloads the browser
        }
	}
});
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
};