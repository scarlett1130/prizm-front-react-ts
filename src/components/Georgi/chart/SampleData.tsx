// SmtCashMonitor
export const cashMonitorDetail = [
  {
    name_key: 'Token contract',
    name_value: '0x00000000',
    name_value_c: '0x00000000'
  },
  {
    name_key: 'Pooled SMT',
    name_value: '1,000,000 SMT (10%)',
    name_value_c: '10,000 SMTC (1%)'
  },
  {
    name_key: 'Pooled BNB',
    name_value: '10,000 BNB',
    name_value_c: '1,000,000 BUSD'
  },
  {
    name_key: 'Total liquidity value',
    name_value: '$ 12,000,000',
    name_value_c: '$ 2,000,000'
  },
  {
    name_key: 'Total marketcap',
    name_value: '$ 60,000,000',
    name_value_c: '$ 100,000,000'
  },
  {
    name_key: 'Total transaction',
    name_value: '379,698',
    name_value_c: '789,000'
  },
  {
    name_key: 'Holders',
    name_value: '887,679',
    name_value_c: '1,300,786'
  },
  {
    name_key: 'Daily volume',
    name_value: '$ 1,000,000',
    name_value_c: '$ 5,000,000'
  }
];
export const circulationDetail = {
  left: [
    [
      { value: 'Liquidity pool', width: '60%' },
      { value: '0,000 SMT', width: '40%' }
    ],
    [
      { value: 'Chest rewards', width: '60%' },
      { value: '0,000 SMT', width: '40%' }
    ],
    [
      { value: 'Farming supply', width: '60%' },
      { value: '0,000 SMT', width: '40%' }
    ]
  ],
  right: [
    [
      { value: 'Surprise rewards', width: '60%' },
      { value: '0,000 SMT', width: '40%' }
    ],
    [
      { value: 'User’s wallet', width: '60%' },
      { value: '0,000 SMT', width: '40%' }
    ],
    [
      { value: 'Marketing & dev wallet', width: '60%' },
      { value: '0,000 SMT', width: '40%' }
    ]
  ]
};
// FOR SUMMARY
export const chartDetailArray = [
  {
    name_key: 'LP token amount',
    name_value: '$ 1,000,000',
    color: '#EDEDED'
  },
  {
    name_key: 'Teamwork ladder rewards',
    name_value: '$ 1,00,000',
    color: '#EDEDED'
  },
  {
    name_key: 'Farming rewards',
    name_value: '$ 50,000',
    color: '#EDEDED'
  },
  {
    name_key: 'Nobility rewards',
    name_value: '$ 500,000',
    color: '#EDEDED'
  },
  {
    name_key: 'Other rewards',
    name_value: '$ 10,000',
    color: '#EDEDED'
  }
];
export const chartDetailArray1 = [
  {
    name_key: 'Value of your initial capital',
    name_value: '$ 10,000',
    color: '#8F8F8F',
    marginTop: '10px'
  },
  {
    name_key: 'Total current rewards revenue',
    name_value: '$ 1,660,000',
    color: '#9D7400',
    marginTop: '10px'
  },
  {
    name_key: 'Total profit',
    name_value: '$ 1,560,000',
    color: '#24AE5F',
    marginTop: '10px'
  },
  {
    name_key: 'Total loss',
    name_value: '$ 0',
    color: '#F84343',
    marginTop: '10px'
  }
];
// FOR LP
export const chartDetailArrayLP = [
  {
    name_key: 'LP token amount',
    name_value: '$ 1,000,000',
    color: '#E0A501'
  },
  {
    name_key: 'LP token value',
    name_value: '$ 1,000,000',
    color: '#E0A501'
  },
  {
    name_key: 'Pooled SMT',
    name_value: '$ 100,000',
    color: '#EDEDED'
  },
  {
    name_key: 'Pooled SMT value',
    name_value: '$ 100,000',
    color: '#EDEDED'
  },
  {
    name_key: 'Pooled BNB',
    name_value: '$ 100,000',
    color: '#EDEDED'
  },
  {
    name_key: 'Pooled BNB value',
    name_value: '$ 50,000',
    color: '#EDEDED'
  },
  {
    name_key: 'Share of Pool',
    name_value: '$ 500,000',
    color: '#EDEDED'
  },
  {
    name_key: 'Last pool date',
    name_value: '20/11/2022',
    color: '#EDEDED'
  }
];
// FOR TEAMWORK
export const chartDetailArrayTeamwork = [
  {
    name_key: 'Revenue from buy tax',
    name_value: '$ 70,000',
    color: '#EDEDED'
  },
  {
    name_key: 'Revenue from farming tax',
    name_value: '$ 30,000',
    color: '#EDEDED'
  },
  {
    name_key: 'Revenue from Smart Academy',
    name_value: '$ 0',
    color: '#EDEDED'
  },
  {
    name_key: 'Revenue from Smart Living',
    name_value: '$ 0',
    color: '#EDEDED'
  },
  {
    name_key: 'Revenue from Smart Utility',
    name_value: '$ 0',
    color: '#EDEDED'
  },
  {
    name_key: 'Total teamwork ladder revenue so far',
    name_value: '$ 100,000',
    color: '#E0A501'
  }
];
// FOR FAMRING REWARDS
export const chartDetailArrayFarming = [
  {
    name_key: '0.1% fixed daily rewards revenue',
    name_value: '$ 70,000',
    color: '#EDEDED'
  },
  {
    name_key: 'Sell tax distribution',
    name_value: '$ 30,000',
    color: '#EDEDED'
  },
  {
    name_key: '0.17% fee on Pancakeswap',
    name_value: '$ 0',
    color: '#EDEDED'
  },
  {
    name_key: 'Total farming rewards revenue',
    name_value: '$ 0',
    color: '#E0A501'
  }
];
export const state = [
  {
    options: {
      chart: {
        id: 'basic-bar',
        toolbar: {
          show: false
        }
      },
      colors: ['#00A3FF'],
      tooltip: {
        enabled: false
      },
      zoom: {
        enabled: false
      },
      annotations: {
        yaxis: [
          {
            y: 65,
            borderColor: '#C4C4C4',
            strokeDashArray: 5,
            label: {
              borderColor: '#C4C4C4',
              offsetY: 6,
              offsetX: 30,
              style: {
                color: '#fff',
                background: '#C4C4C4'
              },
              text: '65.00'
            }
          },
          {
            y: 110,
            borderColor: '#C4C4C4',
            strokeDashArray: 0,
            label: {
              borderColor: '#C4C4C4',
              offsetY: 6,
              offsetX: 30,
              style: {
                color: '#fff',
                background: '#C4C4C4'
              },
              text: '170.82'
            }
          }
        ],
        points: [
          {
            x: '11',
            y: 65,
            marker: {
              size: 8,
              fillColor: '#E0A501',
              strokeColor: '#E0A501',
              radius: 2,
              cssClass: 'apexcharts-custom-class'
            },
            label: {
              borderColor: ' #EDEDED',
              offsetY: 23,
              offsetX: -40,
              style: {
                color: '#212121',
                background: ' #EDEDED'
              },

              text: 'Starting'
            }
          },
          {
            x: '12',
            y: 110,
            marker: {
              size: 8,
              fillColor: '#E0A501',
              strokeColor: '#E0A501',
              radius: 2,
              cssClass: 'apexcharts-custom-class'
            }
          }
        ]
      },
      xaxis: {
        categories: ['10', '12:00', '11', '12:00', '12', '09:00'],
        labels: {
          style: {
            colors: '#EDEDED',
            fontSize: '8px'
          }
        }
      },
      yaxis: {
        opposite: true,
        labels: {
          style: {
            colors: '#EDEDED',
            fontSize: '6px'
          }
        }
      }
    },
    series: [
      {
        name: 'series-1',
        data: [30, 40, 65, 70, 109, 110]
      }
    ]
  },
  {
    options: {
      chart: {
        id: 'basic-bar',
        toolbar: {
          show: false
        }
      },
      colors: ['#E0A501'],
      tooltip: {
        enabled: false
      },
      zoom: {
        enabled: false
      },
      annotations: {
        yaxis: [
          {
            y: 50,
            borderColor: '#C4C4C4',
            strokeDashArray: 5,
            label: {
              borderColor: '#C4C4C4',
              offsetY: 6,
              offsetX: 30,
              style: {
                color: '#fff',
                background: '#C4C4C4'
              },
              text: '50'
            }
          },
          {
            y: 80.12,
            borderColor: '#C4C4C4',
            strokeDashArray: 0,
            label: {
              borderColor: '#C4C4C4',
              offsetY: 6,
              offsetX: 30,
              style: {
                color: '#fff',
                background: '#C4C4C4'
              },
              text: '80.12'
            }
          }
        ],
        points: [
          {
            x: '12:00',
            y: 50,
            marker: {
              size: 8,
              fillColor: '#E0A501',
              strokeColor: '#E0A501',
              radius: 2,
              cssClass: 'apexcharts-custom-class'
            },
            label: {
              borderColor: '#EDEDED',
              offsetY: 23,
              offsetX: -40,
              style: {
                color: '#212121',
                background: '#EDEDED'
              },
              text: 'Starting'
            }
          },
          {
            x: '09:00',
            y: 80.12,
            marker: {
              size: 8,
              fillColor: '#E0A501',
              strokeColor: '#E0A501',
              radius: 2,
              cssClass: 'apexcharts-custom-class'
            }
          }
        ]
      },
      xaxis: {
        show: true,
        categories: ['10', '12:00', '11', '12:00', '12', '09:00'],
        labels: {
          show: true,
          style: {
            colors: '#EDEDED',
            fontSize: '8px'
          }
        }
      },
      yaxis: {
        show: true,
        opposite: true,
        labels: {
          style: {
            colors: '#EDEDED',
            fontSize: '6px'
          }
        }
      }
    },
    series: [
      {
        name: 'series-2',
        data: [110, 50, 124, 20, 50, 80.12]
      }
    ]
  }
];
export const rewardList = [
  [
    {
      title: 'Daily farming rewards',
      tooltip:
        'Earn SMT by farming SMT. The higher your license, the more rewards could be earned. Farming more SMT can get you more rewards as well.',
      badge: '2',
      content: '1 / 365',
      buttonName: 'Available',
      url: 'daily-farming',
      path: '/static/img/main_reward/image0.png'
    },
    {
      title: 'Golden Tree Phases Rewards',
      tooltip:
        'Golden Tree is grown by community contribution. The more phases of growth passed, the more surprise for loyal community!',
      badge: 'none',
      content: '1 reward available',
      buttonName: 'Available',
      url: 'tree-phase',
      path: '/static/img/main_reward/image4.png'
    }
  ],
  [
    {
      title: 'Airdrop rewards',
      tooltip:
        'Get SMT, SMTC, NFTs or other Partner tokens by joining future Airdrops!',
      badge: 'none',
      content: 'no airdrop available yet',
      buttonName: 'Unavailable',
      url: '#',
      path: '/static/img/main_reward/image1.png'
    },
    {
      title: 'Quest Rewards',
      tooltip:
        'Complete the quest rewards to obtain a lot of SMTC, NFTs, or other token rewards.',
      badge: 'none',
      content: '1 reward available',
      buttonName: 'Available',
      url: 'quest',
      path: '/static/img/main_reward/image5.png'
    }
  ],
  [
    {
      title: 'Nobility title rewards',
      tooltip:
        'As you contribute to Golden Tree, your status as Smart Army is also upgraded with Nobility Titles. King is above everyone!',
      badge: '2',
      content: '2 title rewards unlocked',
      buttonName: 'Available',
      url: 'nobility',
      path: '/static/img/main_reward/image2.png'
    }
  ],
  [
    {
      title: 'Surprise rewards',
      tooltip:
        'Go buy SMT, every 1,000 USD buy transaction accumulated will reward you 1 surprise reward that contains up to 10,000 SMT & 1,000 SMTC!',
      badge: '5',
      content: '2 surprise rewards unlocked',
      buttonName: 'Available',
      url: 'surprise',
      path: '/static/img/main_reward/image3.png'
    }
  ]
];

export const activityTitle = [
  'Earned 33 SMT Staking Rewards',
  'Prince Nobility title achieved!',
  'Updated Runner to Visionary License',
  'Earned 10 Surprise Rewards',
  'Earned 12 SMT Staking Rewards',
  'Earned 15 SMT Staking Rewards',
  'Earned 13 SMT Staking Rewards',
  'Earned 10 Surprise Rewards',
  'Earned 6 SMT Staking Rewards',
  'Updated Opportunist to Runner License',
  'Earned 5 Surprise Rewards',
  'Earned 12 SMT Staking Rewards',
  'Earned 10 SMT Staking Rewards'
];

// For current tax
export const buyContent = [
  [
    {
      key: '_buyGoldenPoolFee',
      num: '30',
      desc: 'Goes to Golden Tree Pool as BUSD'
    },
    {
      key: '_buyReferralFee',
      num: '50',
      desc: 'Goes to Ladder System'
    }
  ],
  [
    {
      key: '_buyAchievementFee',
      num: '10',
      desc: 'Goes to Global Passive Share'
    },
    {
      key: '_buyDevFee',
      num: '10',
      desc: 'Goes to Marketing & Development'
    }
  ]
];
export const sellContent = [
  [
    {
      key: '_sellGoldenPoolFee',
      num: '30',
      desc: 'Goes to Golden Tree Pool as BUSD'
    },
    {
      key: '_sellBurnFee',
      num: '30',
      desc: 'Goes to Burn Address'
    }
  ],
  [
    {
      key: '_sellAchievementFee',
      num: '10',
      desc: 'Goes to Global Passive Share'
    },
    {
      key: '_sellDevFee',
      num: '10',
      desc: 'Goes to Marketing & Development'
    },
  ]
];
export const farmingContent = [
  [
    {
      key: 'farmingTax_golden',
      num: '3',
      desc: 'Goes to Golden Tree Pool as BUSD'
    },
    {
      key: 'farmingTax_referral',
      num: '10',
      desc: 'Goes to Ladder System'
    }
  ],
  [
    {
      key: 'farmingTax_passive',
      num: '1',
      desc: 'Goes to Global Passive Share'
    },
    {
      key: 'farmingTax_dev',
      num: '1',
      desc: 'Goes to Marketing & Development'
    }
  ]
];
export const walletContent = [
  [
    {
      key: '_transferGoldenFee',
      num: '50',
      desc: 'Goes to Golden Tree Pool as BUSD'
    },
    {
      key: '_transferAchievementFee',
      num: '10',
      desc: 'Goes to Global Passive Share'
    }
  ],
  [
    {
      key: '_transferFarmingFee',
      num: '30',
      desc: 'Goes to Ladder System'
    },
    {
      key: '_transferDevFee',
      num: '10',
      desc: 'Goes to Marketing & Development'
    }
  ]
];
