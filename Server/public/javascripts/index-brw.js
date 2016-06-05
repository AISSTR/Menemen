$(document).ready(function () {
    $.ajaxSetup({
        cache: false
    });

    $('#send-command').click(function () {
        // [TODO]: update
        $.post('cmd', { deviceId: $('#device-id').val(), command: 'someCommand', value: 'val' });

        var date = new Date();
        var ts = ('0' + date.getHours()).slice(-2) + ':' +
            ('0' + date.getMinutes()).slice(-2) + ':' +
            ('0' + date.getSeconds()).slice(-2);

        $('#command-timestamp').text(ts);
    });

    $('#update-data').click(function () {
        $.get('data', { deviceId: $('#device-id').val() }, function (val) {
            $('#device-data-table-container').html(val);
        });
    });
});