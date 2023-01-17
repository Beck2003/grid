$(`#grid`).append(
    `<table class="center">
        <tr>
            <td class="box"></td>
            <td class="box"></td>
            <td class="box"></td>
            <td class="box"></td>
        </tr>
        <tr>
            <td class="box"></td>
            <td class="box"></td>
            <td class="box"></td>
            <td class="box"></td>
        </tr>
        <tr>
            <td class="box"></td>
            <td class="box"></td>
            <td class="box"></td>
            <td class="box"></td>
        </tr>
        <tr>
            <td class="box"></td>
            <td class="box"></td>
            <td class="box"></td>
            <td class="box"></td>
        </tr>
    </table>`
);

$('.box').on('click', function() {
    $(this).toggleClass('clicked');
    });
