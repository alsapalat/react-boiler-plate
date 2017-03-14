var elixir = require('laravel-elixir');
const exec = require('child_process').exec;
 
elixir.config.assetsPath = "src/assets"
elixir.config.publicPath="src/assets";

elixir(mix => {
    const bower = 'bower_components';
    const node = 'node_modules';
    const srcJs = 'src/assets/js';
    const srcCss = 'src/assets/css';
    const srcFont = 'src/assets/fonts';
    const inProduction = elixir.config.production;

    mix
        .copy(`${bower}/jquery/dist/jquery.min.js`, `${srcJs}/jquery.min.js`)
        .copy(`${bower}/chart.js/dist/Chart.min.js`, `${srcJs}/chart.min.js`)
        .copy(`${bower}/moment/min/moment.min.js`, `${srcJs}/moment.min.js`)
        .copy(`${bower}/bootstrap/dist/css/bootstrap.min.css`, `${srcCss}/bootstrap.min.css`)
        .copy(`${bower}/bootstrap/dist/css/bootstrap-theme.min.css`, `${srcCss}/bootstrap-theme.min.css`)

        .copy(`${bower}/bootstrap/dist/fonts`, `${srcFont}`)
        .copy(`${bower}/font-awesome/fonts`, `${srcFont}`)

        .copy(`${bower}/font-awesome/css/font-awesome.min.css`, `${srcCss}/font-awesome.min.css`)
        .copy(`${node}/react-virtualized/styles.css`, `${srcCss}/react-virtualized.css`)

        .scripts([
            'jquery.min.js',
            'chart.min.js',
            'moment.min.js'
        ],`${srcJs}/common.min.js`);


    if(inProduction) {
        mix
            .copy(`${srcJs}/common.min.js`, `build/static/js/common.min.js`)
            .copy(`${srcCss}/bootstrap.min.css`, `build/static/css/bootstrap.min.css`)
            .copy(`${srcCss}/select.css`, `build/static/css/select.css`)
            .copy(`${srcCss}/react-modal.css`, `build/static/css/react-modal.css`)
            .copy(`${srcCss}/font-awesome.min.css`, `build/static/css/font-awesome.min.css`)
    }

    exec('cd public; ln -s ../src/assets static');
})