$(function() {
  $('section.exercise').prepend('<h5>Exercise</h5>');

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
