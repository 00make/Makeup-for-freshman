var Agtk = {};
Agtk.constants = {};
Agtk.constants.actionCommands = {};
Agtk.constants.actionCommands.ObjectByType = 0;
Agtk.constants.actionCommands.ObjectById = 1;

Agtk.constants.actionCommands.ProjectCommon = 0;
Agtk.constants.actionCommands.UnsetObject = -1;
Agtk.constants.actionCommands.SelfObject = -2;
Agtk.constants.actionCommands.OtherThanSelfObject = -3;
Agtk.constants.actionCommands.ChildObject = -4;
Agtk.constants.actionCommands.LockedObject = -5;
Agtk.constants.actionCommands.TouchedObject = -6;

Agtk.constants.actionCommands.AccordingToMoveDirection = -2;

Agtk.constants.actionCommands.commandBehavior = {
    CommandBehaviorNext: 0,
    CommandBehaviorLoop: 1,
    CommandBehaviorBlock: 2,
    CommandBehaviorBrea: 3
};

Agtk.constants.actionCommands.templateMove = {
    MoveHorizontal: 0,
    MoveVertical: 1,
    MoveBound: 2,
    MoveRandom: 3,
    MoveNearPlayer: 4,
    MoveApartNearPlayer: 5,
    MoveStop: 6
};
Agtk.constants.actionCommands.objectLock = {
    SwitchConditionOn: 0,
    SwitchConditionOff: 1,
    SwitchConditionOnFromOff: 2,
    SwitchConditionOffFromOn: 3,

    VariableCompareValue: 0,
    VariableCompareVariable: 1,
    VariableCompareNaN: 2,

    UseSwitch: 0,
    UseVariable: 1,
    UseNone: 2
};
Agtk.constants.actionCommands.objectCreate = {
    PositionCenter: 0,
    PositionLockObjectCenter: 1
};
Agtk.constants.actionCommands.objectChange = {
    PositionCenter: 0,
    PositionLockObjectCenter: 1
};
Agtk.constants.actionCommands.objectMove = {
    MoveWithDirection: 0,
    MoveToPosition: 1,
    MoveToObjectCenter: 2,

    TargettingByType: 1,
    TargettingById: 2,
    TargettingTouched: 3,
    TargettingLocked: 4
};
Agtk.constants.actionCommands.objectPushPull = {
    DirectionAngle: 0,
    DirectionObjectDisp: 1,

    EffectDirectionAngle: 0,
    EffectDirectionObjectDisp: 1,
    EffectDirectionObjectConnect: 2,

    TargettingByType: 0,
    TargettingById: 1,
    TargettingTouched: 2,
    TargettingLocked: 3
};
Agtk.constants.actionCommands.attackSetting = {
    AttributeNone: 0,
    AttributePreset: 1,
    AttributeValue: 2
};
Agtk.constants.actionCommands.sceneRotateFlip = {
    TypeReset: 0,
    TypeRotationFlip: 1
};
Agtk.constants.actionCommands.soundPlay = {
    SoundSe: 0,
    SoundVoice: 1,
    SoundBgm: 2
};
Agtk.constants.actionCommands.messageShow = {
    WindowNone: -1,
    WindowTemplate: 0,
    WindowImage: 1,

    TemplateWhiteFrame: 0,
    TemplateBlack: 1,
    TemplateWhite: 2,

    PositionCenter: 0,
    PositionLockObjectCenter: 1,
    PositionScenePosition: 2,

    HorzAlignLeft: 0,
    HorzAlignCenter: 1,
    HorzAlignRight: 2,

    VertAlignTop: 0,
    VertAlignCenter: 1,
    VertAlignBottom: 2
};
Agtk.constants.actionCommands.scrollMessageShow = {
    BackgroundNone: -1,
    BackgroundTemplate: 0,
    BackgroundImage: 1,

    TemplateBlack: 1,
    TemplateWhite: 2,

    PositionCenter: 0,
    PositionLockObjectCenter: 1,
    PositionScenePosition: 2,

    HorzAlignLeft: 0,
    HorzAlignCenter: 1,
    HorzAlignRight: 2
};
Agtk.constants.actionCommands.effectShow = {
    PositionCenter: 0,
    PositionLockObjectCenter: 1
};
Agtk.constants.actionCommands.effectRemove = {
    AllEffects: -2,

    TargettingByType: 0,
    TargettingById: 1,
    TargettingSceneEffect: 5
};
Agtk.constants.actionCommands.particleShow = {
    PositionCenter: 0,
    PositionLockObjectCenter: 1
};
Agtk.constants.actionCommands.particleRemove = {
    AllParticles: -2,

    TargettingByType: 0,
    TargettingById: 1,
    TargettingSceneParticle: 5
};
Agtk.constants.actionCommands.movieShow = {
    PositionCenter: 0,
    PositionLockObjectCenter: 1,
    PositionScenePosition: 2,

    VertAlignCenter: 0,
    VertAlignTop: 1,
    VertAlignBottom: 2,

    HorzAlignCenter: 0,
    HorzAlignLeft: 1,
    HorzAlignRight: 2
};
Agtk.constants.actionCommands.imageShow = {
    kPositionCenter: 0,
    kPositionLockObjectCenter: 1,
    kPositionScenePosition: 2,

    kVertAlignCenter: 0,
    kVertAlignTop: 1,
    kVertAlignBottom: 2,

    kHorzAlignCenter: 0,
    kHorzAlignLeft: 1,
    kHorzAlignRight: 2
};
Agtk.constants.actionCommands.gameSpeedChange = {
    TargettingByType: 0,
    TargettingById: 1,
    TargettingTouched: 2,
    TargettingLocked: 3
};
Agtk.constants.actionCommands.timer = {
    SecondByValue: 0,
    SecondByVariable: 1
};
Agtk.constants.actionCommands.directionMove = {
    AccordingToMoveDirection: -2
};
Agtk.constants.actionCommands.forthBackMoveTurn = {
    kMoveNone: 0,
    kMoveForth: 1,
    kMoveBack: 2,

    kTurnNone: 0,
    kTurnRight: 1,
    kTurnLeft: 2,

    AccordingToMoveDirection: -2
};
Agtk.constants.actionCommands.menuShow = {
    None: -1,
    SlideUp: 0,
    SlideDown: 1,
    SlideLeft: 2,
    SlideRight: 3
};
Agtk.constants.actionCommands.menuHide = {
    None: -1,
    SlideUp: 0,
    SlideDown: 1,
    SlideLeft: 2,
    SlideRight: 3
};

Agtk.constants.linkCondition = {};
Agtk.constants.linkCondition.attackAreaTouched = {
    AttributeNone: 0,
    AttributePreset: 1,
    AttributeValue: 2
};
Agtk.constants.linkCondition.attackAreaNear = {
    DistanceNone: 0,
    DistanceGreaterEqual: 1,
    DistanceLessEqual: 2,

    AttributeNone: 0,
    AttributePreset: 1,
    AttributeValue: 2
};
Agtk.constants.linkCondition.objectNear = {
    DistanceNone: 0,
    DistanceGreaterEqual: 1,
    DistanceLessEqual: 2
};
Agtk.constants.linkCondition.slopeTouched = {
    DirectionUpper: 0,
    DirectionLower: 1,

    DownwardLeft: 0,
    DownwardRight: 1,
    DownwardNone: 2
};

Agtk.constants.conditions = {
    OperatorLess: 0,
    OperatorLessEqual: 1,
    OperatorEaual: 2,
    OperatorGreaterEqual: 3,
    OperatorGreater: 4,
    OperatorNotEqual: 5,

    CompareValue: 0,
    CompareVariable: 1
};
Agtk.constants.assignments = {
    SwitchAssignOn: 0,
    SwitchAssignOff: 1,
    SwitchAssignToggle: 2,

    VariableAssignOperatorSet: 0,
    VariableAssignOperatorAdd: 1,
    VariableAssignOperatorSub: 2,
    VariableAssignOperatorMul: 3,
    VariableAssignOperatorDiv: 4,
    VariableAssignOperatorMod: 5,

    VariableAssignValue: 0,
    VariableAssignVariable: 1,
    VariableAssignRandom: 2,
    VariableAssignScript: 3,
};
Agtk.constants.attackAttributes = {
    Fire: 1,
    Water: 2,
    Earth: 3,
    Air: 4,
    Thunder: 5,
    Ice: 6,
    Light: 7,
    Darkness: 8
};
Agtk.constants.filterEffects = {
    EffectNoise: 0,
    EffectMosaic: 1,
    EffectMonochrome: 2,
    EffectSepia: 3,
    EffectNegaPosiReverse: 4,
    EffectDefocus: 5,
    EffectChromaticAberration: 6,
    EffectDarkness: 7,
    EffectDispImage: 8,
    EffectFillColor: 9,

    PlacementCenter: 0,
    PlacementMagnify: 1,
    PlacementTiling: 2,
    PlacementKeepRatio: 3,
    PlacementObjectCenter: 4
};
Agtk.constants.systemLayers = {
    SystemLayerTopMostId: -1,
    SystemLayerBackgroundId: -2,
    HudLayerId: 9999
};
Agtk.constants.qualifier = {
    QualifierSingle: -1,
    QualifierWhole: -2
};

Agtk.constants.objectType = {
    ObjectTypeAll: 0,
    ObjectTypePlayer: 1,
    ObjectTypeEnemy: 2
};

Agtk.constants.tile = {
    WallTop: 0,
    WallLeft: 1,
    WallRight: 2,
    WallBottom: 3,

    WallTopBit: (1 << 0),
    WallLeftBit: (1 << 1),
    WallRightBit: (1 << 2),
    WallBottomBit: (1 << 3),
    WallBitMask: 0x0f
};
Agtk.constants.direction = {
    BottomLeftBit: (1 << 1),
    BottomBit: (1 << 2),
    BottomRightBit: (1 << 3),
    LeftBit: (1 << 4),

    RightBit: (1 << 6),
    TopLeftBit: (1 << 7),
    TopBit: (1 << 8),
    TopRightBit: (1 << 9),

    AllDirectionBit: 0x3DE
};

Agtk.constants.controllers = {
    OperationKeyA: 1,
    OperationKeyB: 2,
    OperationKeyX: 3,
    OperationKeyY: 4,
    OperationKeyR1: 5,
    OperationKeyR2: 6,
    OperationKeyL1: 7,
    OperationKeyL2: 8,
    OperationKeyUp: 9,
    OperationKeyDown: 10,
    OperationKeyLeft: 11,
    OperationKeyRight: 12,
    OperationKeyLeftStickUp: 13,
    OperationKeyLeftStickDown: 14,
    OperationKeyLeftStickLeft: 15,
    OperationKeyLeftStickRight: 16,
    OperationKeyRightStickUp: 17,
    OperationKeyRightStickDown: 18,
    OperationKeyRightStickLeft: 19,
    OperationKeyRightStickRight: 20,
    OperationKeyLeftClick: 21,
    OperationKeyRightClick: 22,
    OperationKeyStart: 23,
    OperationKeySelect: 24,
    OperationKeyHome: 25,
    OperationKeyOk: 26,
    OperationKeyCancel: 27,

    ReservedKeyCodePc_W: 0,
    ReservedKeyCodePc_A: 1,
    ReservedKeyCodePc_S: 2,
    ReservedKeyCodePc_D: 3,
    ReservedKeyCodePc_LeftClick: 4,
    ReservedKeyCodePc_RightClick: 5,
    ReservedKeyCodePc_Up: 10,
    ReservedKeyCodePc_Right: 11,
    ReservedKeyCodePc_Down: 12,
    ReservedKeyCodePc_Left: 13,
    ReservedKeyCodePc_MiddleClick: 22,
    ReservedKeyCodePc_WheelUp: 24,
    ReservedKeyCodePc_WhellDown: 26,
    ReservedKeyCodePc_MousePointer: 28,
};

Agtk.constants.animations = {
    Motion: 0,
    Effect: 1,
    Particle: 2
};

Agtk.constants.tracks = {
    TimelineWall: 0,
    TimelineHit: 1,
    TimelineAttack: 2,
    TimelineConnect: 3
};

