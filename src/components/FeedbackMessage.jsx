import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class FeedbackMessage extends Component {
  messageFeedback(assertions) {
    if (assertions === 1) {
      return (
        <p>
          Você acertou
          <span data-testid="feedback-total-question">
            {' '}
            {assertions}
          </span>
          {' '}
          pergunta!
        </p>
      );
    }
    if (assertions > 1) {
      return (
        <p>
          Você acertou
          <span data-testid="feedback-total-question">
            {' '}
            {assertions}
          </span>
          {' '}
          perguntas!
        </p>
      );
    }
    return (
      <p>
        Você acertou
        <span data-testid="feedback-total-question">
          {' '}
          {assertions}
        </span>
        {' '}
        perguntas!
      </p>
    );
  }

  messageScore(score) {
    if (score > 1) {
      return (
        <p>
          Um total de
          {' '}
          <span data-testid="feedback-total-score">
            {score}
          </span>
          {' '}
          pontos`
        </p>
      );
    }
    return (
      <p>
        Um total de
        {' '}
        <span data-testid="feedback-total-score">
          {score}
        </span>
        {' '}
        ponto`
      </p>
    );
  }

  RenderFeedbackMessage() {
    const { assertions, score } = this.props;
    console.log(assertions);
    const scoreMessage = this.messageScore(score);
    const assertionMessage = this.messageFeedback(assertions);
    return (
      <>
        {assertionMessage}
        {scoreMessage}
      </>
    );
  }

  render() {
    return (
      <div>
        {this.RenderFeedbackMessage()}
      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  score: state.questReducer.score,
  assertions: state.questReducer.assertions,
});

FeedbackMessage.propTypes = {
  score: PropTypes.number,
  assertions: PropTypes.number,
};

FeedbackMessage.defaultProps = {
  score: 0,
  assertions: 0,
};

// Esperando existir
// const mapDispatchToProps = (dispatch) => ({
//   algo: () => dispatch(algo())
// })

export default connect(mapStateToProps)(FeedbackMessage);
