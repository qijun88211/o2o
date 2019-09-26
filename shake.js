<script type="text/javascript">
    if (window.DeviceMotionEvent) {
        alert("starting");
        window.addEventListener('devicemotion', deviceMotionHandler, false);
    }

    /**
     * 检测晃动
     */
    var isShake = false;                   // 是否正在摇动
    var SHAKE_THRESHOLD = 2500;
    var last_update = 0;
    var x = 0;
    var y = 0;
    var z = 0;
    var last_x = 0;
    var last_y = 0;
    var last_z = 0;

    function deviceMotionHandler(eventData) {
        alert(2);
        // 正在摇一摇
        if (isShake) {
            return false;
        }

        var acceleration = eventData.accelerationIncludingGravity;
        var curTime = new Date().getTime();
        if ((curTime - last_update) > 100) {
            var diffTime = curTime - last_update;
            last_update = curTime;
            x = acceleration.x;
            y = acceleration.y;
            z = acceleration.z;
            var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;

            if (speed > SHAKE_THRESHOLD) { // 满足摇一摇条件
                alert(3);
                isShake = true;
            }

            last_x = x;
            last_y = y;
            last_z = z;
        }

        alert(4);

        return isShake;
    }
</script>
