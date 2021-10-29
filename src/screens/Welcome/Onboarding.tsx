import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LightArrowRight2 from 'src/assets/icons/LightArrowRight2';
import FitnestText from 'src/components/FitnestText';
import {Colors} from 'src/styles/theme';
import styles from './styles';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

const contentsWelcomeScreen = [
  {
    image: require('src/assets/images/Onboarding1.png'),
    title: 'Track Your Goal',
    content:
      "Don't worry if you have trouble determining your goals, We can help you determine your goals and track your goals",
  },
  {
    image: require('src/assets/images/Onboarding2.png'),
    title: 'Get Burn',
    content:
      'Let’s keep burning, to archive yours goals, it hurts only temporarily, if you give up now you will be in pain forever',
  },
  {
    image: require('src/assets/images/Onboarding3.png'),
    title: 'Eat Well',
    content:
      "Let's start a healthy lifestyle with us, we can determine your diet every day. healthy eating is fun",
  },
  {
    image: require('src/assets/images/Onboarding4.png'),
    title: 'Improve Sleep Quality',
    content:
      'Improve the quality of your sleep with us, good quality sleep can bring a good mood in the morning',
  },
];
export default function Onboarding() {
  const [step, setStep] = React.useState(0);

  const {image, title, content} = contentsWelcomeScreen[step];

  const onNextStep = React.useCallback(() => {
    if (step >= 3) {
    } else {
      setStep(step + 1);
    }
  }, [setStep, step]);
  return (
    <View style={styles.containerWelcomeView}>
      <Image source={image} style={styles.imageWelcome} />
      <View style={styles.bottomViewWelcome}>
        <View>
          <FitnestText style={styles.title}>{title}</FitnestText>
          <FitnestText style={styles.content}>{content}</FitnestText>
        </View>
        <View style={styles.nextStepWrapper}>
          <AnimatedCircularProgress
            size={60}
            width={2}
            fill={(step + 1) * 25}
            rotation={0}
            tintColor={Colors.blue}
            duration={750}
            backgroundColor="transparent">
            {() => (
              <TouchableOpacity onPress={onNextStep}>
                <LinearGradient
                  colors={[Colors.blue, Colors.blue]}
                  style={styles.buttonNextStep}>
                  <LightArrowRight2 stroke={Colors.white} />
                </LinearGradient>
              </TouchableOpacity>
            )}
          </AnimatedCircularProgress>
        </View>
      </View>
    </View>
  );
}
