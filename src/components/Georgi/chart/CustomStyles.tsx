import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

// INDEX COMPONENT STYLES
export const IndexStyles = makeStyles((theme) => ({
  // CONTAINER CUSTOM STYLE
  customPadding: {
    padding: '10px 40px 40px 30px !important',
    '@media (max-width: 1280px)': {
      padding: '0 10px 10px 10px  !important'
    }
  },
  cardContentCloseStyle: (props: Theme) => ({
    position: 'absolute',
    top: '5px',
    right: '5px',
    cursor: 'pointer',
    color: 'white'
  }),
  pageTitleStyle: {
    color: '#E0A501',
    fontWeight: '700',
    // marginTop: '20px !important',
    '@media (max-width: 968px)': {
      fontSize: '18px !important'
      // marginTop: '10px !important',
    }
  },
  // LEFT AND RIGHT SIDE OF DASHBOARD STYLE
  customSpacing: {
    paddingLeft: '10px',
    paddingRight: '10px'
  },
  tabTitleStyle: {
    cursor: 'pointer',
    borderRadius: '10px',
    marginBottom: '0px',
    padding: '0 12px',
    minWidth: 'max-content',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all .2s',
    '@media (max-width: 968px)': {
      fontSize: '10px !important'
    }
  },
  // MULTITAB ACTIVE BUTTON STYLE
  activeTab: {
    background: '#E0A501',
    color: '#212121 !important',
    cursor: 'pointer',
    borderRadius: '10px',
    marginBottom: '0px',
    padding: '0 12px',
    minWidth: 'max-content',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all .2s',
    '@media (max-width: 968px)': {
      fontSize: '10px !important'
    }
  },
  // CHART DETAIL BOX STYLE
  chartDetailBoxStyle: {
    position: 'relative',
    width: '100%',
    height: '40px',
    zIndex: '2',
    '@media (max-width: 968px)': {
      height: '30px'
    }
  },
  // CHART DETAIL CARDACTION BUTTON STYLE
  chartDetailCardActionStyle: {
    background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
    border: '2px solid #323232',
    marginTop: '10px',
    boxSizing: 'border-box',
    borderRadius: '10px',
    height: '100%',
    padding: '0 35px',
    position: 'relative',
    cursor: 'pointer',
    justifyContent: 'center',
    zIndex: '-1'
  },
  // CHART DETAIL CARDACTION TYPOGRAPHY STYLE
  chartCardTypoStyle: {
    textAlign: 'center',
    '@media (max-width: 968px)': {
      fontSize: '10px !important'
    }
  },
  cardContentBoxStyle: {
    cursor: 'pointer'
  },
  // CHART DETAIL CARD CONTENT STYLE
  chartCardContentStyle: {
    padding: '4px 20px 20px 20px !important',
    width: '100%',
    background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
    border: '2px solid #323232',
    boxSizing: 'border-box',
    borderRadius: '10px',
    position: 'relative',
    overflow: 'hidden',
    marginTop: '-40px',
    zIndex: '1',
    '@media (max-width: 968px)': {
      marginTop: '-30px'
    }
  },
  // CHART DETAIL DEVIDER STYLE
  chartDetailDeviderStyle: {
    color: '#323232',
    height: '2px !important',
    marginTop: '10px !important'
  },
  // CHART DETAIL ARRAY CONTENT STYLE
  chartDetailArrayContentStyle: {
    padding: '0 10px 0 10px',
    marginTop: '10px',
    width: '100%'
  },
  // CHART DETAIL ARRAY VALUES STYLE
  chartDetailArrayValueStyle: {
    fontWeight: '500 !important',
    width: '50%',
    lineHeight: '110% !important',
    '@media (max-width: 968px)': {
      fontSize: '10px !important'
    }
  },
  // SMT & SMT CASH MONITOR OUT BOX STYLE
  smtCashMonitorOutBoxStyle: {
    position: 'relative',
    height: '28px'
  },
  // SMT & SMT CASH MONITOR INNER BOX STYLE
  smtCashMonitorInnerBoxStyle: {
    position: 'absolute',
    bottom: '0',
    right: '0px',
    left: '0px',
    background: '#695400',
    height: '100%',
    borderRadius: '10px',
    textAlign: 'center'
  },
  // COPY LINK BAR CARD ACTION STYLE
  copyLinkCardActionStyle: {
    background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
    border: '2px solid #323232',
    boxSizing: 'border-box',
    borderRadius: '10px',
    height: '36px',
    width: '100%',
    marginTop: '20px',
    padding: '0 0 0 10px',
    position: 'relative',
    // cursor: 'pointer',
    justifyContent: 'flex-start',
    // zIndex: '-1',
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 968px)': {
      height: '27px',
      marginTop: '10px'
    }
  },
  // COPY LINK TEXT STYLE
  copyLinkTextStyle: (props: Theme) => ({
    fontWeight: '600 !important',
    fontSize: '13px !important',
    color: 'green',
    '@media (max-width: 968px)': {
      fontSize: '10px !important'
    }
  }),
  copyLinkTextValueStyle: (props: Theme) => ({
    fontWeight: '600 !important',
    fontSize: '13px !important',
    color: 'white',
    '@media (max-width: 968px)': {
      fontSize: '10px !important'
    }
  }),
  copyImageStyle: {
    width: '20px',
    height: '22px',
    position: 'absolute',
    right: '15px',
    cursor: 'pointer',
    zIndex: '1',
    '@media (max-width: 968px)': {
      width: '15px',
      height: '16px'
    }
  },
  scmHeadingLeftTitleStyle: (props: Theme) => ({
    color: 'green',
    position: 'absolute',
    left: '0',
    '@media (max-width: 968px)': {
      fontSize: '18px !important'
    }
  }),
  scmHeadintRightTitleStyle: (props: Theme) => ({
    color: 'brown',
    position: 'absolute',
    right: '0',
    '@media (max-width: 968px)': {
      fontSize: '18px !important'
    }
  }),
  scmContentTitleLeftStyle: {
    fontWeight: '500 !important',
    width: '40%',
    '@media (max-width: 968px)': {
      fontSize: '10px !important'
    }
  },
  smtCashDetailTitleStyle: (props: Theme) => ({
    color: 'white',
    fontWeight: '500',
    '@media (max-width: 968px)': {
      fontSize: '9px !important'
    }
  }),
  scmContentTitleRightStyle: {
    fontWeight: '500 !important',
    width: '60%',
    '@media (max-width: 968px)': {
      fontSize: '10px !important'
    }
  },
  scmContentOutBoxStyle: {
    height: '19px',
    '@media (max-width: 968px)': {
      height: '12px'
    }
  },
  smcDetailOutBoxStyle: {
    position: 'relative',
    width: '100%',
    height: '32px',
    marginTop: '-16px',
    zIndex: '1'
  },
  smcDetailCAStyle: {
    background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
    border: '2px solid #323232',
    boxSizing: 'border-box',
    borderRadius: '10px',
    height: '100%',
    justifyContent: 'center',
    position: 'relative',
    cursor: 'pointer'
  },
  smcDetailCATitleStyle: (props: Theme) => ({
    textAlign: 'center',
    fontWeight: '700 !important',
    color: `${'green'} !important`,
    '@media (max-width: 968px)': {
      fontSize: '10px !important'
    }
  }),
  smcDetailCCStyle: (props: Theme) => ({
    padding: '30px 10px !important',
    width: '100%',
    background: 'black',
    border: `2px solid gray`,
    boxSizing: 'border-box',
    borderRadius: '10px',
    overflow: 'hidden',
    marginTop: '-16px',
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 968px)': {
      padding: '23px 7px 22px 7px !important'
    }
  }),
  scmDetailIconStyle: {
    width: '8px',
    height: '8px',
    marginLeft: '12px'
  },
  // LEARN MORE CUSTOM OUT BOX STYLE
  learnMoreOutBoxStyle: {
    padding: '20px 30px',
    height: '100%',
    position: 'relative',
    '@media (max-width: 968px)': {
      padding: '15px 30px'
    }
  },
  // LEARN MORE TREE CUSTOM STYLE
  learnMoreTreeStyle: {
    width: '100px',
    height: '110px',
    position: 'absolute',
    bottom: '0px',
    right: '30px',
    '@media (max-width: 968px)': {
      width: '86px',
      height: '108px'
    }
  },
  learnTitleStyle: {
    '@media (max-width: 968px)': {
      fontSize: '18px !important'
    }
  },
  learnCardStyle: {
    height: '132px',
    marginTop: '20px',
    '@media (max-width: 968px)': {
      height: '100px'
    }
  }
}));

// NOTIFICATION COMPONENT STYLES
export const NotiStyles = makeStyles({
  // NOTIFICATION BOX CUSTOME STYLE
  notiBoxStyle: {
    position: 'relative',
    width: '100%',
    height: '50px',
    zIndex: '2',
    '@media (max-width: 1024px)': {
      marginTop: '10px',
      height: '38px'
    }
  },
  // Mobile Notification Button Tittle
  mobileNotiTitle: {
    '@media (max-width: 968px)': {
      fontSize: '10px !important'
    }
  },
  // NOTIFICATION CARDACTION BUTTON STYLE
  cardActionBtnStyle: {
    background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
    border: '2px solid #323232',
    boxSizing: 'border-box',
    borderRadius: '10px',
    height: '100%',
    padding: '0 35px',
    position: 'relative',
    cursor: 'pointer',
    justifyContent: 'center',
    zIndex: '-1'
  },
  // NOTIFICATION CARD CONTENT STYLE
  cardContentStyle: {
    padding: '10px 30px 20px 30px',
    width: '100%',
    background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
    border: '2px solid #323232',
    boxSizing: 'border-box',
    borderRadius: '10px',
    position: 'relative',
    overflow: 'hidden',
    marginTop: '-50px',
    zIndex: '1',
    '@media (max-width: 1024px)': {
      marginTop: '-40px'
    }
  },
  // NOTIFICATION CARD CONTENT CLOSE ICON STYLE
  cardContentCloseStyle: (props: Theme) => ({
    position: 'absolute',
    top: '20px',
    right: '25px',
    cursor: 'pointer',
    color: 'white'
  }),
  // ARROW BUTTON ACTIVE, DEACTIVE STYLE
  arrowDeActiveStyle: (props: Theme) => ({
    color: 'grey'
  }),
  arrowActiveStyle: (props?: Theme) => ({
    color: 'white'
  }),
  // TAB PANEL CUSTOM STYLE
  tabPanelCustomStyle: {
    marginTop: '20px',
    padding: '0 !important'
  },
  tabSubPanelShow: {},
  tabSubPanelHide: {
    display: 'none'
  },
  customBadgeStyle: {
    boxShadow:
      '6px 6px 6px rgba(0, 0, 0, 0.25), inset -1px -4px 6px rgba(0, 0, 0, 0.25)'
  }
});

// GROW TREE COMPONENT STYLE
export const GrowTreeStyle = makeStyles({
  activeTab: {
    background: 'linear-gradient(180deg, #FFCB00 0%, #C59100 84.87%) !important'
  },
  outBoxCustomStyle: {
    height: '730px',
    marginTop: '20px',
    '@media (max-width: 968px)': {
      height: '700px'
    }
  },
  treeCustomBoxStyle: {
    position: 'absolute',
    top: '20px',
    bottom: '23px',
    left: '20px',
    right: '90px',
    display: 'flex',
    justifyContent: 'center'
  },
  treeCustomStyle: {
    width: 'auto',
    height: 'auto',
    position: 'absolute',
    bottom: '185px',
    alignItems: 'flex-end',
    '@media (max-width: 968px)': {
      bottom: '180px'
    }
  },
  treeStatusBoxStyle: {
    position: 'absolute',
    left: '25px',
    right: '100px',
    bottom: '86px',
    '@media (max-width: 968px)': {
      bottom: '85px'
    }
  },
  treeDetailCustomStyle: {
    position: 'absolute',
    bottom: '35px',
    right: '38px',
    left: '38px',
    fontWeight: '400',
    textAlign: 'center',
    '@media (max-width: 968px)': {
      bottom: '30px',
      fontSize: '13px !important'
    }
  },
  // GROW TREE DROP DOWN DETAIL STYLE
  growTreeContentStyle: {
    padding: '10px 20px 20px 20px !important',
    width: '100%',
    background: 'linear-gradient(180deg, #212121 0%, #000000 100%)',
    border: '2px solid #323232',
    boxSizing: 'border-box',
    borderRadius: '10px',
    position: 'relative',
    overflow: 'hidden',
    marginTop: '-86px',
    zIndex: '1'
  },
  // GROW TREE DROP DOWN DETAIL TYPO STYLE
  growTreeDetailTypoStyle: {
    textAlign: 'center',
    padding: '0 10px',
    '@media (max-width: 968px)': {
      fontSize: '13px !important'
    }
  },
  // GROW TREE BUTTON GROUP BOX
  growTreeButtonGroupBox: {
    position: 'absolute',
    top: '84px',
    right: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column'
  },
  // ARROW DROP DOWN ICON STYLE
  dropdownIconStyle: (props: Theme) => ({
    color: 'green',
    margin: 'auto',
    position: 'absolute',
    width: '100% !important',
    marginTop: '-40px',
    cursor: 'pointer',
    '@media (max-width: 968px)': {
      marginTop: '-30px'
    }
  }),
  growthTitleStyle: {
    position: 'absolute',
    top: '50px',
    right: '20px',
    width: '54px'
  }
});

// ACHIEVEMENT COMPONENT STYLE
export const AchieveStyle = makeStyles({
  customOutBoxStyle: {
    '@media (max-width: 968px)': {
      // flexDirection: 'column !important',
    }
  },
  customInnerBoxStyle: {
    width: '49%',
    '@media (max-width: 968px)': {
      // width: '100%',
    }
  },
  seeMoreCustomStyle: (props: Theme) => ({
    paddingRight: '10px',
    textAlign: 'right',
    color: `${'green'} !important`,
    cursor: 'pointer'
  }),
  badgeCustomBoxStyle: {
    display: 'flex',
    padding: '13px 18px 15px 18px',
    justifyContent: 'space-between',
    '@media (max-width: 968px)': {
      padding: '10px'
    }
  },
  achievedDotStyle: (props: Theme) => ({
    fontSize: '22px !important',
    color: 'green'
  }),
  achievedTitleStyle: {
    marginLeft: '7px !important',
    '@media (max-width: 968px)': {
      fontSize: '10px !important'
    }
  },
  titleBoxStyle: {
    padding: '20px',
    '@media (max-width: 968px)': {
      padding: '10px'
    }
  },
  titleInnerBoxStyle: {
    justifyContent: 'flex-start !important',
    marginBottom: '10px',
    height: '15px',
    '@media (max-width: 968px)': {
      marginBottom: '5px'
    }
  },
  customBadgeStyle: {
    width: '30%'
  }
});

// CURRENT TAX
export const CurrentTaxStyle = makeStyles({
  activeTab: (props: Theme) => ({
    background: 'green',
    color: `${'black'} !important`
  }),
  headingTooltipBox: (props: Theme) => ({
    position: 'absolute',
    top: '0',
    right: '0',
    background: 'grey',
    borderRadius: '10px',
    padding: '3px 10px 3px 10px',
    display: 'flex',
    alignItems: 'center',
    height: '28px',
    '@media (max-width: 968px)': {
      height: '21px',
      top: '5px'
    }
  }),
  taxHearingTitleStyle: (props: Theme) => ({
    color: 'green',
    '@media (max-width: 968px)': {
      fontSize: '18px !important'
    }
  }),
  emergencyTitleStyle: (props: Theme) => ({
    width: '90px',
    color: 'black',
    fontWeight: '500',
    '@media (max-width: 968px)': {
      fontSize: '9px !important'
    }
  }),
  multiMenuBox: (props: Theme) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: '0',
    right: '10px',
    left: '10px',
    height: '28px',
    background: 'lime',
    borderRadius: '10px',
    textAlign: 'center'
  }),
  taxMainContentStyle: {
    alignItems: 'stretch !important',
    marginTop: '20px',
    height: '208px',
    '@media (max-width: 968px)': {
      marginTop: '15px',
      height: '160px'
    }
  },
  outBoxStyle1: {
    display: 'flex',
    width: '35%',
    padding: '0 5px',
    height: '208px',
    '@media (max-width: 968px)': {
      height: '160px'
    }
  },
  outBoxStyle2: {
    display: 'flex',
    width: '65%',
    height: '208px',
    '@media (max-width: 968px)': {
      height: '160px'
    }
  },
  innerBoxStyle1: {
    padding: '50px 20px 30px 20px',
    '@media (max-width: 968px)': {
      padding: '45px 10px 23px 10px'
    }
  },
  numTitleStyle: (props: Theme) => ({
    color: `${'white'} !important`,
    textAlign: 'center',
    '@media (max-width: 968px)': {
      fontSize: '27px !important'
    }
  }),
  descTitleStyle: (props: Theme) => ({
    color: `${'green'} !important`,
    textAlign: 'center',
    '@media (max-width: 968px)': {
      fontSize: '9px !important'
    }
  }),
  totalTaxTitleStyle: (props: Theme) => ({
    color: 'white',
    textAlign: 'center',
    marginTop: '45px !important',
    '@media (max-width: 968px)': {
      marginTop: '30px !important',
      fontSize: '13px !important'
    }
  }),
  totalTaxTitleStyle1: (props: Theme) => ({
    color: 'white',
    textAlign: 'center',
    marginTop: '10px !important',
    '@media (max-width: 968px)': {
      fontSize: '13px !important',
      marginTop: '5px !important'
    }
  }),
  percentTitleStyle: (props: Theme) => ({
    fontSize: '48px !important',
    color: 'white',
    textAlign: 'center',
    lineHeight: '100% !important',
    '@media (max-width: 968px)': {
      fontSize: '37px !important'
    }
  })
});

// CHART
export const ChartStyle = makeStyles({
  activeButton: (props: Theme) => ({
    color: 'green',
    borderRight: `3px solid ${'gray'} !important`,
    height: '16px',
    borderRadius: '0px !important',
    fontSize: '12px !important',
    lineHeight: '15px !important',
    padding: '5px !important',
    minWidth: '50px !important'
  }),
  deactiveButton: (props: Theme) => ({
    color: `${'white'} !important`,
    borderRight: `3px solid ${'gray'} !important`,
    height: '16px !important',
    borderRadius: '0px !important',
    fontSize: '12px !important',
    lineHeight: '15px !important',
    padding: '5px !important',
    minWidth: '50px !important'
  }),
  // MULTITAB ACTIVE BUTTON STYLE
  activeTab: (props: Theme) => ({
    background: 'green',
    color: `${'black'} !important`
  }),
  multiTabCustomStyle: {
    position: 'relative',
    marginTop: '10px',
    width: '100%',
    '@media (max-width: 968px)': {
      marginTop: '20px'
    }
  },
  innerBoxStyle: (props: Theme) => ({
    background: 'lime',
    borderRadius: '10px',
    textAlign: 'center',
    height: '28px'
  })
});
