import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export class FlatHeader extends React.Component {
  constructor(props) {
    super(props);
    this.onLeftIconPressed = this.onLeftIconPressed.bind(this);
    this.onLeftTextPressed = this.onLeftTextPressed.bind(this);
    this.onLeftContentPressed = this.onLeftContentPressed.bind(this);

    this.onRightIconPressed = this.onRightIconPressed.bind(this);
    this.onRightTextPressed = this.onRightTextPressed.bind(this);
    this.onRightContentPressed = this.onRightContentPressed.bind(this);

    this.onCenterContentPressed = this.onCenterContentPressed.bind(this);
  }
  render() {
    const {
      leftIcon,
      leftText,
      //leftTextStyle,
      leftIconHandler,
      leftTextHandler,
      leftContentHandler,
      rightIcon,
      rightIconHandler,
      rightText,
      //rightTextStyle,
      rightTextHandler,
      rightContentHandler,
      centerContent,
      centerContentHandler,
      large
    } = this.props;
    return (
      <View style={[styles.container, this.props.style]}>
        {(leftIcon || leftText) &&
          this.leftContent(
            leftIcon,
            leftIconHandler,
            leftText,
            leftTextHandler,
            leftContentHandler,
            large
          )}
        {centerContent && (
          <View style={styles.centerBox}>
            {this.centerContentContainer(centerContent, centerContentHandler)}
          </View>
        )}
        {(rightIcon || rightText) &&
          this.rightContent(
            rightIcon,
            rightIconHandler,
            rightText,
            rightTextHandler,
            rightContentHandler,
            large
          )}
      </View>
    );
  }

  onLeftIconPressed() {
    if (this.props.leftIconHandler) {
      this.props.leftIconHandler();
    }
  }

  onLeftTextPressed() {
    if (this.props.leftTextHandler) {
      this.props.leftTextHandler();
    }
  }

  onLeftContentPressed() {
    if (this.props.leftContentHandler) {
      this.props.leftContentHandler();
    }
  }

  onRightIconPressed() {
    if (this.props.rightIconHandler) {
      this.props.rightIconHandler();
    }
  }

  onRightTextPressed() {
    if (this.props.rightTextHandler) {
      this.props.rightTextHandler();
    }
  }

  onRightContentPressed() {
    if (this.props.rightContentHandler) {
      this.props.rightContentHandler();
    }
  }

  onCenterContentPressed() {
    if (this.props.centerContentHandler) {
      this.props.centerContentHandler();
    }
  }

  //------------------------------------ Center Content
  _centerContentCore(centerContent) {
    return <View style={styles.rowBox}>{centerContent}</View>;
  }
  centerContentContainer(centerContent, centerContentHandler) {
    if (centerContent) {
      if (centerContentHandler) {
        return (
          <TouchableOpacity onPress={this.onCenterContentPressed}>
            {this._centerContentCore(centerContent)}
          </TouchableOpacity>
        );
      } else {
        return this._centerContentCore(centerContent);
      }
    } else {
      return null;
    }
  }

  //------------------------------------ Left Content
  leftContent(
    leftIcon,
    leftIconHandler,
    leftText,
    leftTextHandler,
    leftContentHandler,
    large
  ) {
    if (leftContentHandler) {
      return (
        <TouchableOpacity
          style={styles.leftBox}
          onPress={this.onLeftContentPressed}
        >
          {this.leftIconContent(leftIcon, leftIconHandler)}
          {this.leftTextContent(leftText, leftTextHandler, large)}
        </TouchableOpacity>
      );
    } else {
      return (
        <View style={styles.leftBox}>
          {this.leftIconContent(leftIcon, leftIconHandler)}
          {this.leftTextContent(leftText, leftTextHandler, large)}
        </View>
      );
    }
  }

  _leftIconContentCore(leftIcon) {
    return <View style={styles.IconBox}>{leftIcon}</View>;
  }

  leftIconContent(leftIcon, leftIconHandler) {
    if (leftIcon) {
      if (leftIconHandler) {
        return (
          <TouchableOpacity onPress={this.onLeftIconPressed}>
            {this._leftIconContentCore(leftIcon)}
          </TouchableOpacity>
        );
      } else {
        return this._leftIconContentCore(leftIcon);
      }
    } else {
      return null;
    }
  }

  _leftTextCore(leftText, large) {
    return (
      (leftText || this.props.children) && (
        <View style={styles.rowBox}>
          {leftText ? (
            <Text
              style={[
                large ? styles.leftTextBold : styles.leftText,
                this.props.leftTextStyle
              ]}
            >
              {leftText}
            </Text>
          ) : null}
          {this.props.children}
        </View>
      )
    );
  }

  leftTextContent(leftText, leftTextHandler, large) {
    if (leftTextHandler) {
      return (
        <TouchableOpacity onPress={this.onLeftTextPressed}>
          {this._leftTextCore(leftText, large)}
        </TouchableOpacity>
      );
    } else {
      return this._leftTextCore(leftText, large);
    }
  }

  //------------------------------------ Right Content

  rightContent(
    rightIcon,
    rightIconHandler,
    rightText,
    rightTextHandler,
    rightContentHandler,
    large
  ) {
    if (rightContentHandler) {
      return (
        <TouchableOpacity
          style={styles.rightBox}
          onPress={this.onRightContentPressed}
        >
          {this.rightTextContent(rightText, rightTextHandler, large)}
          {this.rightIconContent(rightIcon, rightIconHandler)}
        </TouchableOpacity>
      );
    } else {
      return (
        <View style={styles.rightBox}>
          {this.rightTextContent(rightText, rightTextHandler, large)}
          {this.rightIconContent(rightIcon, rightIconHandler)}
        </View>
      );
    }
  }

  _rightIconContentCore(rightIcon) {
    return <View style={styles.IconBox}>{rightIcon}</View>;
  }

  rightIconContent(rightIcon, rightIconHandler) {
    if (rightIcon) {
      if (rightIconHandler) {
        return (
          <TouchableOpacity onPress={this.onRightIconPressed}>
            {this._rightIconContentCore(rightIcon)}
          </TouchableOpacity>
        );
      } else {
        return this._rightIconContentCore(rightIcon);
      }
    } else {
      return null;
    }
  }

  _rightTextCore(rightText, large) {
    return (
      rightText && (
        <View style={styles.rowBox}>
          {rightText ? (
            <Text
              style={[
                large ? styles.rightTextBold : styles.rightText,
                this.props.rightTextStyle
              ]}
            >
              {rightText}
            </Text>
          ) : null}
        </View>
      )
    );
  }

  rightTextContent(rightText, rightTextHandler, large) {
    if (rightTextHandler) {
      return (
        <TouchableOpacity onPress={this.onRightTextPressed}>
          {this._rightTextCore(rightText, large)}
        </TouchableOpacity>
      );
    } else {
      return this._rightTextCore(rightText, large);
    }
  }
  //------------------------------------
}

const ALIGN_STYLE = {
  left: 'flex-start',
  right: 'flex-end',
  center: 'center'
};

const Colors = {
  primary: '#F06292',
  white: '#FFF'
};

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: ALIGN_STYLE.center,
    height: 52
  },
  rowBox: { flexDirection: 'row', alignItems: 'center' },
  leftBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: ALIGN_STYLE.center,
    justifyContent: ALIGN_STYLE.left
  },
  rightBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: ALIGN_STYLE.center,
    justifyContent: ALIGN_STYLE.right
  },
  centerBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: ALIGN_STYLE.center,
    justifyContent: ALIGN_STYLE.center
  },
  IconBox: {
    flexDirection: 'row',
    alignItems: ALIGN_STYLE.center,
    justifyContent: ALIGN_STYLE.center,
    width: 40,
    margin: 0,
    padding: 0
  },
  leftText: {
    color: Colors.white,
    marginLeft: 10
  },
  rightText: {
    color: Colors.white,
    marginRight: 10
  },
  leftTextBold: {
    color: Colors.white,
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 18
  },
  rightTextBold: {
    color: Colors.white,
    marginRight: 10,
    fontWeight: 'bold',
    fontSize: 18
  },
  icon: {
    color: Colors.white,
    fontSize: 30
  }
});
