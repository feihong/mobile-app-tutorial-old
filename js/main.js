$(function() {
  $('.exercise').prepend('<h5>Exercise</h5>');
  $('.note').prepend('<h5>Note</h5>');
  $('.tip').prepend('<h5>Tip</h5>');

  $('.hint').each(function() {
    var hint = $(this);
    var span = $('<span class="hidden"></span>');
    span.append(hint.contents());
    hint.append(span);
    hint.prepend('<button class="hint">Hint</button>')
  });

  $('article').on('click', 'button.hint', function() {
    $(this).next('span').toggleClass('hidden');
  });
});
