import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const accept = (assertion) => (
  <p>
    Você acertou
    <span data-testid="feedback-total-question">
      {' '}
      {assertion}
    </span>
    {' '}
    pergunta!
  </p>
);
class FeedbackMessage extends Component {
  messageFeedback(assertions) {
    if (assertions === 1) {
      return accept(assertions);
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

    return accept(assertions);
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
    const { assertions, summedScore } = this.props;
    console.log(assertions);
    // const scoreMessage = this.messageScore(score);
    // const assertionMessage = this.messageFeedback(assertions);
    return (
      <div className="flex justify-center ">
        <p data-testid="feedback-total-score" className="p-16">{` Pontuação ${summedScore}`}</p>
        <p data-testid="feedback-total-question" className="p-16">{` Questões Acertadas ${assertions}`}</p>
      </div>
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
  summedScore: state.questReducer.totalScore,
  assertions: state.questReducer.assertions,
});

FeedbackMessage.propTypes = {
  summedScore: PropTypes.number,
  assertions: PropTypes.number,
};

FeedbackMessage.defaultProps = {
  summedScore: 0,
  assertions: 0,
};

// Esperando existir
// const mapDispatchToProps = (dispatch) => ({
//   algo: () => dispatch(algo())
// })

export default connect(mapStateToProps)(FeedbackMessage);
