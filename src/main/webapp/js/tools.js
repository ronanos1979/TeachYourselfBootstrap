function printViewPortSize() {
    function getBootstrapBreakpoint() {
        var width = window.innerWidth;
        if (width < 768)  return 'xs (< 768px)';
        if (width < 992)  return 'sm (768px - 991px)';
        if (width < 1200) return 'md (992px - 1199px)';
        return 'lg (>= 1200px)';
    }

    function update() {
        document.getElementById('viewPortSizeDisplay').innerHTML =
            'Viewport width: ' + window.innerWidth + 'px &mdash; Bootstrap breakpoint: ' + getBootstrapBreakpoint();
    }

    update();
    window.addEventListener('resize', update);
}
