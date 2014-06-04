function markResolved() {
  var $select = $( '#bbps-topic-status select' );
  var $button = $( 'input[name="bbps_support_submit"]' );

  $select
      .find( 'option' )
      .attr( 'selected', false )
      .end()
      .find( 'option[value="2"]' )
      .attr( 'selected', true );

  $button.trigger( 'click' );
}

function assignToMe() {
  var $select = $( '#bbps-topic-assign select' );
  var $button = $( 'input[name="bbps_support_topic_assign"]' );

  $select
      .find( 'option' )
      .attr( 'selected', false )
      .end()
      .find( 'option[value="18"]' )
      .attr( 'selected', true );

  $button.trigger( 'click' );
}

$(document).bind('keydown', 'ctrl+e meta+e', function(){
  markResolved()
});

$(document).bind('keydown', 'ctrl+v meta+v', function(){
  assignToMe()
});