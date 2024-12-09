package SPL_dist1_fla
{
   import Box2D.*;
   import Box2D.Collision.*;
   import Box2D.Collision.Shapes.*;
   import Box2D.Common.*;
   import Box2D.Common.Math.*;
   import Box2D.Dynamics.*;
   import Box2D.Dynamics.Contacts.*;
   import Box2D.Dynamics.Controllers.*;
   import Box2D.Dynamics.Joints.*;
   import adobe.utils.*;
   import flash.accessibility.*;
   import flash.display.*;
   import flash.errors.*;
   import flash.events.*;
   import flash.external.*;
   import flash.filters.*;
   import flash.geom.*;
   import flash.media.*;
   import flash.net.*;
   import flash.printing.*;
   import flash.profiler.*;
   import flash.sampler.*;
   import flash.system.*;
   import flash.text.*;
   import flash.ui.*;
   import flash.utils.*;
   import flash.xml.*;
   import mochi.as3.*;
   
   public dynamic class MainTimeline extends MovieClip
   {
      public var goalWords:MovieClip;
      
      public var inst:MovieClip;
      
      public var timeInd:MovieClip;
      
      public var StreakerHead:MovieClip;
      
      public var lf:MovieClip;
      
      public var lb0:MovieClip;
      
      public var soundBtn:MovieClip;
      
      public var score_txt:TextField;
      
      public var groundBlinker:MovieClip;
      
      public var scores:MovieClip;
      
      public var blueprints:MovieClip;
      
      public var yourNextMatch:TextField;
      
      public var lb1:MovieClip;
      
      public var top2Hit:MovieClip;
      
      public var playerWins:MovieClip;
      
      public var PUHandler:MovieClip;
      
      public var lb2:MovieClip;
      
      public var top1Hit:MovieClip;
      
      public var Counter:MovieClip;
      
      public var lb3:MovieClip;
      
      public var choosePlayer:MovieClip;
      
      public var mucisBtn:MovieClip;
      
      public var briefer:MovieClip;
      
      public var lb4:MovieClip;
      
      public var Head:MovieClip;
      
      public var ens:MovieClip;
      
      public var Shadow:MovieClip;
      
      public var shop:MovieClip;
      
      public var lb5:MovieClip;
      
      public var cover:MovieClip;
      
      public var finalMessage:TextField;
      
      public var medal:MovieClip;
      
      public var goal_txt:TextField;
      
      public var scoreMC:MovieClip;
      
      public var rf:MovieClip;
      
      public var lb6:MovieClip;
      
      public var bgPitch:MovieClip;
      
      public var chooseBut:SimpleButton;
      
      public var teamName:TextField;
      
      public var chooseTeam:TextField;
      
      public var lb7:MovieClip;
      
      public var nextGameBut:MovieClip;
      
      public var lb8:MovieClip;
      
      public var goalmc1:MovieClip;
      
      public var goal2Hit:MovieClip;
      
      public var lb9:MovieClip;
      
      public var achAward:MovieClip;
      
      public var h1:MovieClip;
      
      public var goalmc2:MovieClip;
      
      public var goal1Hit:MovieClip;
      
      public var matchPoint:MovieClip;
      
      public var OPPRACKET:MovieClip;
      
      public var achBox:MovieClip;
      
      public var extra_txt:TextField;
      
      public var score_txt2:TextField;
      
      public var h2:MovieClip;
      
      public var pauseBtn:MovieClip;
      
      public var YourHead:MovieClip;
      
      public var Heads:MovieClip;
      
      public var continueBtn:MovieClip;
      
      public var h3:MovieClip;
      
      public var HERORACKET:MovieClip;
      
      public var sm:MovieClip;
      
      public var bgTitle:MovieClip;
      
      public var h4:MovieClip;
      
      public var flasher:MovieClip;
      
      public var arial:MovieClip;
      
      public var key:KeyPoll;
      
      public var tpGameTypeList:Array;
      
      public var team_id_count:int;
      
      public var teamList:Array;
      
      public var teamChosen:Boolean;
      
      public var round:*;
      
      public var nextOpponent:int;
      
      public var blankLeague:Sprite;
      
      public var thisGameScoreLogged:Boolean;
      
      public var AI_levelNum:int;
      
      public var PITCH_levelNum:int;
      
      public var homeADV:Boolean;
      
      public var backUpFaceNum:int;
      
      public var leagueList:Array;
      
      public var yourLeaguePosition:int;
      
      public var tpGameType:*;
      
      public var tpPitch:int;
      
      public var specialsHeadList:Array;
      
      public var tpSpecials:int;
      
      public var tpSpecialsList:Array;
      
      public var upgradeList:*;
      
      public var upgradePoints:int;
      
      public var upgradeLOCK:Boolean;
      
      public var SPECIAL_HEADS:Boolean;
      
      public var BEAR_HEAD:Boolean;
      
      public var fixture_list:Array;
      
      public var muteMusic:Boolean;
      
      public var muteSound:Boolean;
      
      public var frameName:String;
      
      public var pauseGame:Boolean;
      
      public var myPUs:Collection;
      
      public var myEffects:Collection;
      
      public var myBombs:Collection;
      
      public var levelNum:uint;
      
      public var PUTimer:uint;
      
      public var timer:uint;
      
      public var bouncesLeft:uint;
      
      public var bouncesRight:uint;
      
      public var scoreLeft:uint;
      
      public var scoreRight:uint;
      
      public var lastWonPoint:String;
      
      public var xspeed:Number;
      
      public var oppxspeed:Number;
      
      public var ballSender:String;
      
      public var heroBombed:Boolean;
      
      public var oppBombed:Boolean;
      
      public var oppRightCap:int;
      
      public var pointTimer:int;
      
      public var heroPUSpeed:uint;
      
      public var heroPUJump:uint;
      
      public var heroPUFreeze:Boolean;
      
      public var heroPUBombs:Boolean;
      
      public var oppPUSpeed:uint;
      
      public var oppPUJump:uint;
      
      public var oppPUFreeze:Boolean;
      
      public var oppPUBombs:Boolean;
      
      public var PUFire:Boolean;
      
      public var PUSize:uint;
      
      public var PUBouncy:uint;
      
      public var heroLegBroken:Boolean;
      
      public var oppLegBroken:Boolean;
      
      public var wonArray:Array;
      
      public var heroScoreArray:Array;
      
      public var oppScoreArray:Array;
      
      public var oppNameArray:Array;
      
      public var hairNum:uint;
      
      public var faceNum:uint;
      
      public var playerName:String;
      
      public var placeToGoFromInst:String;
      
      public var inGoal:Boolean;
      
      public var oppLegLastUp:Boolean;
      
      public var suddenDeath:Boolean;
      
      public var TwoPlayers:Boolean;
      
      public var tpskin1:int;
      
      public var tpskin2:int;
      
      public var streakerAlive:Boolean;
      
      public var streakerX:Number;
      
      public var timeMode:Boolean;
      
      public var timeLeft:int;
      
      public var timeLeftBitch:int;
      
      public var kickOppXSP:Number;
      
      public var ach1:Boolean;
      
      public var ach2:Boolean;
      
      public var ach3:Boolean;
      
      public var ach4:Boolean;
      
      public var ach5:Boolean;
      
      public var ach6:Boolean;
      
      public var ach7:Boolean;
      
      public var ach8:Boolean;
      
      public var ach9:Boolean;
      
      public var ach10:Boolean;
      
      public var ach11:Boolean;
      
      public var ach12:Boolean;
      
      public var ach13:Boolean;
      
      public var ach14:Boolean;
      
      public var ach15:Boolean;
      
      public var ach16:Boolean;
      
      public var ach17:Boolean;
      
      public var ach2_lastHitValid:Boolean;
      
      public var ach3_lastHitValid:Boolean;
      
      public var ach4_saveTimer:int;
      
      public var ach8_lastHitValid:Boolean;
      
      public var ach9_lastHitValid:Boolean;
      
      public var ach10_activated:Boolean;
      
      public var ach13_lastHitValid:Boolean;
      
      public var ach17_timer:int;
      
      public var loopChannel:SoundChannel;
      
      public var loopSound:Sound;
      
      public var loopChannel2:SoundChannel;
      
      public var loopSound2:Sound;
      
      public var kickSound:Sound;
      
      public var coinSound:Sound;
      
      public var dieSound:Sound;
      
      public var jumpSound:Sound;
      
      public var explosionSound:Sound;
      
      public var popSound:Sound;
      
      public var cheerSound:Sound;
      
      public var whistleSound:Sound;
      
      public var mySharedObject:SharedObject;
      
      public var savedGameAvailable:Boolean;
      
      public var worldAABB:b2AABB;
      
      public var gravity:b2Vec2;
      
      public var doSleep:Boolean;
      
      public var m_world:b2World;
      
      public var m_iterations:int;
      
      public var m_timeStep:Number;
      
      public var worldScale:uint;
      
      public var myContactListener:*;
      
      public var body:b2Body;
      
      public var revJoint:b2RevoluteJoint;
      
      public var bodyDef:b2BodyDef;
      
      public var boxDef:b2PolygonDef;
      
      public var circleDef:b2CircleDef;
      
      public var chainDef:b2EdgeChainDef;
      
      public var jointDef:b2RevoluteJointDef;
      
      public var ground:b2Body;
      
      public var ball:b2Body;
      
      public var hero:b2Body;
      
      public var racket:b2Body;
      
      public var heroJoint:b2RevoluteJoint;
      
      public var opp:b2Body;
      
      public var oppracket:b2Body;
      
      public var oppJoint:b2RevoluteJoint;
      
      public var leftGoalPost:b2Body;
      
      public var rightGoalPost:b2Body;
      
      public var streaker:b2Body;
      
      public var wonEmAll:Boolean;
      
      public var winMargin:*;
      
      public var pitchSize:*;
      
      public var teamLeftName:*;
      
      public var teamRightName:*;
      
      public var winTest:int;
      
      public var i:*;
      
      public var playerScore:int;
      
      public var pointsGivenUp:int;
      
      public var il:int;
      
      public var url:String;
      
      public var reqURL:URLRequest;
      
      public var variables:URLVariables;
      
      public var loader:URLLoader;
      
      public function MainTimeline()
      {
         super();
         addFrameScript(0,frame1,1,frame2,2,frame3,3,frame4,4,frame5,13,frame14,22,frame23,31,frame32,39,frame40,40,frame41);
      }
      
      public function add_new_team(param1:*, param2:*, param3:*, param4:*, param5:*, param6:*, param7:*, param8:*, param9:*, param10:*, param11:*) : *
      {
         var _loc12_:* = team_id_count;
         teamList[team_id_count] = [param3,param1,0,0,0,0,0,0,0,team_id_count + 1];
         ++team_id_count;
      }
      
      public function resetLeagueData() : *
      {
         teamChosen = false;
         round = 1;
         teamList = [];
         team_id_count = 0;
         add_new_team(9,"sleeves","Arsenal","red","white","white","red","red","white","white","We won the league at White Hart Lane!");
         add_new_team(5,"sleeves","Aston Villa","claret","white","claret","claret","claret","skyblue","claret","O\'Leary !");
         add_new_team(4,"halves","Blackburn","white","blue","blue","white","blue","blue","blue","Souness\' Blue and White Army !");
         add_new_team(4,"plain","Bolton","white","white","white","blue","white","white","white","We are the 1 and only Wanderers!");
         add_new_team(10,"plain","Chelsea","blue","blue","white","white","blue","blue","white","There\'s only 1 Kezman!");
         add_new_team(6,"plain","Everton","blue","white","blue","white","blue","blue","blue","ROONEY ! ROONEY !");
         add_new_team(6,"plain","Fulham","white","black","white","black","white","white","black","Al Fayed\'s Black and White Army!");
         add_new_team(8,"plain","Liverpool","red","red","red","white","red","red","red","1 Michael Owen?");
         add_new_team(8,"plain","Man City","skyblue","white","skyblue","white","skyblue","skyblue","skyblue","Blue Moon - I saw you standing alone");
         add_new_team(10,"plain","Man Utd","red","white","black","white","red","red","red","There\'s only 1 Ronaldo!");
         add_new_team(6,"stripe","Newcastle","black","black","black","white","white","black","black","there\'s only 1 James Milner...");
         add_new_team(6,"plain","Norwich","yellow","green","yellow","green","yellow","yellow","yellow","POOPOO");
         add_new_team(7,"hoops","QPR","blue","white","white","blue","white","white","white","POOPOO");
         add_new_team(4,"stripe","Stoke City","white","red","white","white","red","white","white","THE LORDS MY SHEPHERD !");
         add_new_team(5,"stripe","Sunderland","white","black","red","black","red","white","white","THE LORDS MY SHEPHERD !");
         add_new_team(7,"plain","Swansea","white","black","white","black","white","white","white","POOPOO");
         add_new_team(7,"plain","Tottenham","white","darkblue","white","darkblue","white","white","white","Keano ! there\'s only 1 Keano");
         add_new_team(3,"stripe","West Brom","white","blue","blue","red","blue","blue","blue","THE LORDS MY SHEPHERD !");
         add_new_team(3,"stripe","Wigan","blue","blue","white","blue","white","blue","blue","1 Darren Huckerby!");
         add_new_team(3,"plain","Wolves","orange","black","orange","black","orange","orange","orange","POOPOO");
      }
      
      public function onFrame(param1:Event) : void
      {
         if(frameName == "game")
         {
            onFrame_game();
         }
         else if(frameName == "results")
         {
            onFrame_results();
         }
      }
      
      public function SetMusicVolume(param1:Number) : *
      {
         var _loc2_:SoundTransform = new SoundTransform();
         _loc2_.volume = param1;
         loopChannel.soundTransform = _loc2_;
         loopChannel2.soundTransform = _loc2_;
      }
      
      public function awardAch(param1:int) : *
      {
         achAward.displaySelf(param1);
      }
      
      public function saveGame() : void
      {
         savedGameAvailable = true;
         mySharedObject.data.fileCreated = true;
         mySharedObject.data.wonArray = wonArray;
         mySharedObject.data.heroScoreArray = heroScoreArray;
         mySharedObject.data.oppScoreArray = oppScoreArray;
         mySharedObject.data.ach1 = ach1;
         mySharedObject.data.ach2 = ach2;
         mySharedObject.data.ach3 = ach3;
         mySharedObject.data.ach4 = ach4;
         mySharedObject.data.ach5 = ach5;
         mySharedObject.data.ach6 = ach6;
         mySharedObject.data.ach7 = ach7;
         mySharedObject.data.ach8 = ach8;
         mySharedObject.data.ach9 = ach9;
         mySharedObject.data.ach10 = ach10;
         mySharedObject.data.ach11 = ach11;
         mySharedObject.data.ach12 = ach12;
         mySharedObject.data.teamList = teamList;
         mySharedObject.data.faceNum = faceNum;
         mySharedObject.data.round = round;
         mySharedObject.data.teamChosen = teamChosen;
         mySharedObject.data.upgradeList = upgradeList;
         mySharedObject.data.upgradePoints = upgradePoints;
         mySharedObject.data.BEAR_HEAD = BEAR_HEAD;
         mySharedObject.flush();
      }
      
      public function dumpSavedGame() : void
      {
         savedGameAvailable = false;
         mySharedObject.data.fileCreated = null;
         mySharedObject.data.wonArray = null;
         mySharedObject.data.heroScoreArray = null;
         mySharedObject.data.oppScoreArray = null;
         mySharedObject.data.ach1 = null;
         mySharedObject.data.ach2 = null;
         mySharedObject.data.ach3 = null;
         mySharedObject.data.ach4 = null;
         mySharedObject.data.ach5 = null;
         mySharedObject.data.ach6 = null;
         mySharedObject.data.ach7 = null;
         mySharedObject.data.ach8 = null;
         mySharedObject.data.ach9 = null;
         mySharedObject.data.ach10 = null;
         mySharedObject.data.ach11 = null;
         mySharedObject.data.ach12 = null;
         mySharedObject.data.teamList = null;
         mySharedObject.data.faceNum = null;
         mySharedObject.data.round = null;
         mySharedObject.data.teamChosen = null;
      }
      
      public function stopMusicBecauseClick() : *
      {
         loopChannel.stop();
         muteMusic = true;
      }
      
      public function resetWorld() : void
      {
         worldAABB = new b2AABB();
         worldAABB.lowerBound.Set(-20,-20);
         worldAABB.upperBound.Set(820,540);
         gravity = new b2Vec2(0,300);
         doSleep = true;
         m_iterations = 48;
         m_timeStep = 1 / 96;
         m_world = new b2World(worldAABB,gravity,doSleep);
         worldScale = 1;
         m_world.SetContactListener(myContactListener);
      }
      
      public function removeBody(param1:b2Body) : void
      {
         if(param1 != null)
         {
            removeChild(param1.m_userData);
            param1.m_userData = null;
            m_world.DestroyBody(param1);
            param1 = null;
         }
      }
      
      public function newGame() : void
      {
         Utils.playSound("kickSound");
         wonArray = new Array(false,false,false,false,false,false,false,false,false,false);
         heroScoreArray = new Array(0,0,0,0,0,0,0,0,0,0);
         oppScoreArray = new Array(0,0,0,0,0,0,0,0,0,0);
         ach1 = mySharedObject.data.ach1;
         ach2 = mySharedObject.data.ach2;
         ach3 = mySharedObject.data.ach3;
         ach4 = mySharedObject.data.ach4;
         ach5 = mySharedObject.data.ach5;
         ach6 = mySharedObject.data.ach6;
         ach7 = mySharedObject.data.ach7;
         ach8 = mySharedObject.data.ach8;
         ach9 = mySharedObject.data.ach9;
         ach10 = mySharedObject.data.ach10;
         ach11 = mySharedObject.data.ach11;
         ach12 = mySharedObject.data.ach12;
         ach13 = mySharedObject.data.ach13;
         ach14 = mySharedObject.data.ach14;
         ach15 = mySharedObject.data.ach15;
         ach16 = mySharedObject.data.ach16;
         ach17 = mySharedObject.data.ach17;
         ach2_lastHitValid = false;
         ach3_lastHitValid = false;
         ach4_saveTimer = 1000;
         ach8_lastHitValid = false;
         ach9_lastHitValid = false;
         ach10_activated = false;
         ach13_lastHitValid = false;
         ach17_timer = 100;
         TwoPlayers = false;
         hairNum = 1;
         faceNum = 1;
         oppRightCap = 400;
         pointTimer = 0;
         upgradeList = [[0,0,0,0,0,0,0],[750,500,500,500,1000,500,0],["jump","rush","backtrack","kick","special","goal","bear"],[3,3,3,3,3,1,1]];
         upgradePoints = 0;
         resetLeagueData();
         cover.displaySelf();
         gotoAndStop("levelSelect");
      }
      
      public function continueGame() : void
      {
         Utils.playSound("kickSound");
         wonArray = mySharedObject.data.wonArray;
         heroScoreArray = mySharedObject.data.heroScoreArray;
         oppScoreArray = mySharedObject.data.oppScoreArray;
         ach1 = mySharedObject.data.ach1;
         ach2 = mySharedObject.data.ach2;
         ach3 = mySharedObject.data.ach3;
         ach4 = mySharedObject.data.ach4;
         ach5 = mySharedObject.data.ach5;
         ach6 = mySharedObject.data.ach6;
         ach7 = mySharedObject.data.ach7;
         ach8 = mySharedObject.data.ach8;
         ach9 = mySharedObject.data.ach9;
         ach10 = mySharedObject.data.ach10;
         ach11 = mySharedObject.data.ach11;
         ach12 = mySharedObject.data.ach12;
         ach13 = mySharedObject.data.ach13;
         ach14 = mySharedObject.data.ach14;
         ach15 = mySharedObject.data.ach15;
         ach16 = mySharedObject.data.ach16;
         ach17 = mySharedObject.data.ach17;
         ach2_lastHitValid = false;
         ach3_lastHitValid = false;
         ach4_saveTimer = 1000;
         ach8_lastHitValid = false;
         ach9_lastHitValid = false;
         ach10_activated = false;
         ach13_lastHitValid = false;
         ach17_timer = 100;
         TwoPlayers = false;
         hairNum = 1;
         faceNum = 1;
         oppRightCap = 400;
         pointTimer = 0;
         teamList = mySharedObject.data.teamList;
         faceNum = mySharedObject.data.faceNum;
         round = mySharedObject.data.round;
         teamChosen = mySharedObject.data.teamChosen;
         upgradeList = mySharedObject.data.upgradeList;
         upgradePoints = mySharedObject.data.upgradePoints;
         trace("UL " + upgradeList);
         trace("UP " + upgradePoints);
         cover.displaySelf();
         gotoAndStop("levelSelect");
      }
      
      public function TpbtnClicked() : *
      {
         choosePlayer.x = 200;
         choosePlayer.y = 170;
         choosePlayer.Update();
      }
      
      public function new2PlayerGame() : void
      {
         Utils.playSound("kickSound");
         suddenDeath = false;
         timeMode = true;
         TwoPlayers = true;
         oppRightCap = 400;
         pointTimer = 0;
         cover.displaySelf();
         gotoAndStop("levelSelect");
      }
      
      public function readyToLeaveMenuFrame() : *
      {
      }
      
      public function yearFinished() : *
      {
         drawLeague();
         Utils.playSound("cheerSound");
         sm.y = 489;
         sm.clickable = true;
         nextGameBut.visible = false;
         chooseBut.visible = false;
         lf.visible = false;
         rf.visible = false;
         chooseTeam.text = String("**SEASON COMPLETE**");
         teamName.text = String("**GO SEE YOUR RESULTS**");
      }
      
      public function drawLeague() : *
      {
         var _loc1_:int = 0;
         var _loc2_:* = undefined;
         leagueList = [];
         _loc1_ = 0;
         while(_loc1_ < teamList.length)
         {
            leagueList[_loc1_] = teamList[_loc1_];
            _loc1_++;
         }
         leagueList.sortOn([[2],[7]],[Array.DESCENDING | Array.NUMERIC,Array.DESCENDING | Array.NUMERIC]);
         trace("LEAGUE NOW:" + "\n" + leagueList);
         blankLeague = new Sprite();
         addChild(blankLeague);
         _loc1_ = 0;
         while(_loc1_ < teamList.length)
         {
            _loc2_ = new LeagueItemClip();
            blankLeague.addChild(_loc2_);
            _loc2_.x = 630;
            _loc2_.y = 50 + _loc1_ * 21;
            _loc2_.teamName.text = String(leagueList[_loc1_][0]);
            _loc2_.teamPoints.text = String(leagueList[_loc1_][2]);
            _loc2_.teamPlayed.text = String(leagueList[_loc1_][3]);
            _loc2_.teamWon.text = String(leagueList[_loc1_][4]);
            _loc2_.teamDrawn.text = String(leagueList[_loc1_][5]);
            _loc2_.teamLost.text = String(leagueList[_loc1_][6]);
            _loc2_.teamGd.text = String(leagueList[_loc1_][7] - leagueList[_loc1_][8]);
            _loc2_.lgPos.text = String(_loc1_ + 1);
            if(leagueList[_loc1_][0] == teamList[faceNum - 1][0])
            {
               _loc2_.glow.gotoAndStop(2);
               yourLeaguePosition = _loc1_ + 1;
            }
            else
            {
               _loc2_.glow.gotoAndStop(1);
            }
            _loc1_++;
         }
      }
      
      public function sortOnPrice(param1:*, param2:*) : Number
      {
         var _loc3_:Number = Number(param1[2]);
         var _loc4_:Number = Number(param2[2]);
         if(_loc3_ > _loc4_)
         {
            return -1;
         }
         if(_loc3_ < _loc4_)
         {
            return 1;
         }
         return 0;
      }
      
      public function sortOnGd(param1:*, param2:*) : Number
      {
         var _loc3_:Number = param1[7] - param1[8];
         var _loc4_:Number = param2[7] - param2[8];
         if(_loc3_ > _loc4_)
         {
            return -1;
         }
         if(_loc3_ < _loc4_)
         {
            return 1;
         }
         return 0;
      }
      
      public function checkIfChosen() : *
      {
         trace("checkIfChosen:  " + teamChosen + " faceNum " + faceNum);
         if(teamChosen)
         {
            rf.visible = false;
            lf.visible = false;
            chooseBut.visible = false;
            chooseTeam.text = String("You are playing as..");
            findNextOpponent();
         }
         else
         {
            chooseTeam.text = String("Choose Team");
            nextGameBut.visible = false;
         }
         doTeamName();
      }
      
      public function doTeamName() : *
      {
         trace("teamList" + teamList);
         trace("facenum" + faceNum);
         teamName.text = String(teamList[faceNum - 1][0]);
      }
      
      public function findNextOpponent() : *
      {
         var _loc5_:Number = NaN;
         var _loc6_:Number = NaN;
         var _loc7_:* = undefined;
         var _loc1_:* = 1;
         var _loc2_:Boolean = false;
         var _loc3_:Boolean = false;
         var _loc4_:* = fixture_list[round];
         while(!_loc2_)
         {
            _loc5_ = Number(_loc4_.substr(_loc1_ * 5 - 5 + 12,2));
            _loc6_ = Number(_loc4_.substr(_loc1_ * 5 - 2 + 12,2));
            if(_loc5_ == faceNum || _loc6_ == faceNum)
            {
               _loc7_ = _loc4_.substr(0,12);
               yourNextMatch.text = String("Next: " + _loc7_ + "\n" + teamList[_loc5_ - 1][0] + " vs " + teamList[_loc6_ - 1][0]);
               _loc2_ = true;
               if(_loc5_ == faceNum)
               {
                  nextOpponent = _loc6_;
                  homeADV = true;
               }
               else
               {
                  nextOpponent = _loc5_;
                  homeADV = false;
               }
            }
            _loc1_++;
            if(_loc1_ > 10)
            {
               trace("**** OH SHIT NO GAME SCHEDULED FOR YOU SOUP NAZI ***");
               _loc2_ = true;
               doResults(false,-1,-1);
               if(round < fixture_list.length)
               {
                  _loc3_ = true;
               }
               else
               {
                  yearFinished();
               }
            }
         }
         if(_loc3_)
         {
            findNextOpponent();
         }
         else
         {
            drawLeague();
         }
      }
      
      public function doResults(param1:*, param2:*, param3:*) : *
      {
         var _loc7_:Number = NaN;
         var _loc8_:Number = NaN;
         var _loc9_:int = 0;
         var _loc10_:int = 0;
         var _loc11_:Array = null;
         var _loc12_:* = undefined;
         var _loc13_:* = undefined;
         var _loc4_:* = 1;
         var _loc5_:* = fixture_list[round];
         var _loc6_:Boolean = false;
         while(!_loc6_)
         {
            _loc7_ = Number(_loc5_.substr(_loc4_ * 5 - 5 + 12,2));
            _loc8_ = Number(_loc5_.substr(_loc4_ * 5 - 2 + 12,2));
            if(_loc7_ > 0 && _loc7_ < 50)
            {
               if(_loc7_ == faceNum || _loc8_ == faceNum)
               {
                  teamList[_loc7_ - 1][3] += 1;
                  teamList[_loc8_ - 1][3] += 1;
                  _loc9_ = 1;
                  _loc10_ = 1;
                  if(param2 > param3)
                  {
                     _loc10_ = 3;
                     _loc9_ = 0;
                  }
                  else if(param3 > param2)
                  {
                     _loc10_ = 0;
                     _loc9_ = 3;
                  }
                  trace("***** BWFORE and GOT THIS MANY POINTS " + upgradePoints);
                  _loc11_ = [100,200,0,300];
                  upgradePoints += _loc11_[_loc9_];
                  trace("***** YOU PLAYED and GOT THIS MANY POINTS " + upgradePoints);
                  if(_loc7_ == faceNum)
                  {
                     teamList[_loc7_ - 1][2] += _loc9_;
                     teamList[_loc8_ - 1][2] += _loc10_;
                     teamList[_loc7_ - 1][7] += param3;
                     teamList[_loc7_ - 1][8] += param2;
                     teamList[_loc8_ - 1][7] += param2;
                     teamList[_loc8_ - 1][8] += param3;
                     if(_loc9_ > _loc10_)
                     {
                        teamList[_loc7_ - 1][4] += 1;
                        teamList[_loc8_ - 1][6] += 1;
                     }
                     else if(_loc9_ < _loc10_)
                     {
                        teamList[_loc7_ - 1][6] += 1;
                        teamList[_loc8_ - 1][4] += 1;
                     }
                     else
                     {
                        teamList[_loc7_ - 1][5] += 1;
                        teamList[_loc8_ - 1][5] += 1;
                     }
                  }
                  else
                  {
                     teamList[_loc8_ - 1][2] += _loc9_;
                     teamList[_loc7_ - 1][2] += _loc10_;
                     teamList[_loc7_ - 1][8] += param3;
                     teamList[_loc7_ - 1][7] += param2;
                     teamList[_loc8_ - 1][8] += param2;
                     teamList[_loc8_ - 1][7] += param3;
                     if(_loc9_ > _loc10_)
                     {
                        teamList[_loc7_ - 1][6] += 1;
                        teamList[_loc8_ - 1][4] += 1;
                     }
                     else if(_loc9_ < _loc10_)
                     {
                        teamList[_loc7_ - 1][4] += 1;
                        teamList[_loc8_ - 1][6] += 1;
                     }
                     else
                     {
                        teamList[_loc7_ - 1][5] += 1;
                        teamList[_loc8_ - 1][5] += 1;
                     }
                  }
               }
               else
               {
                  teamList[_loc7_ - 1][3] += 1;
                  teamList[_loc8_ - 1][3] += 1;
                  _loc12_ = JMath.getRand(2) + JMath.getRand(Math.ceil(teamList[_loc7_ - 1][1] / 2));
                  _loc13_ = JMath.getRand(2) + JMath.getRand(Math.ceil(teamList[_loc8_ - 1][1] / 2));
                  teamList[_loc7_ - 1][7] += _loc12_;
                  teamList[_loc7_ - 1][8] += _loc13_;
                  teamList[_loc8_ - 1][7] += _loc13_;
                  teamList[_loc8_ - 1][8] += _loc12_;
                  trace(teamList[_loc7_ - 1][1] + " : " + _loc12_ + " ;;;;;;; vs " + teamList[_loc8_ - 1][1] + " : " + _loc13_);
                  if(_loc12_ > _loc13_)
                  {
                     teamList[_loc7_ - 1][2] += 3;
                     teamList[_loc7_ - 1][4] += 1;
                     teamList[_loc8_ - 1][6] += 1;
                  }
                  else if(_loc13_ > _loc12_)
                  {
                     teamList[_loc8_ - 1][2] += 3;
                     teamList[_loc8_ - 1][4] += 1;
                     teamList[_loc7_ - 1][6] += 1;
                  }
                  else
                  {
                     teamList[_loc7_ - 1][2] += 1;
                     teamList[_loc8_ - 1][2] += 1;
                     teamList[_loc7_ - 1][5] += 1;
                     teamList[_loc8_ - 1][5] += 1;
                  }
               }
            }
            else
            {
               _loc6_ = true;
               ++round;
               trace("** NO MORE GAMES TO PARSE ** round is now " + round + " game SAVED HERE");
               saveGame();
               if(round > fixture_list.length - 1)
               {
                  trace("OHHHHHHHHHHHH SHIT");
               }
            }
            _loc4_++;
         }
      }
      
      public function startNextGame(param1:MouseEvent) : *
      {
         nextGameBut.visible = false;
         startLevel(nextOpponent);
         removeLeague();
      }
      
      public function removeLeague() : *
      {
         if(blankLeague != null)
         {
            trace("_____________________________________________ LEAGUE REMOVED");
            removeChild(blankLeague);
         }
         else
         {
            trace("_____________________________________________ *** COULDNT FIND LEAGUE");
         }
      }
      
      public function startLevel(param1:uint) : *
      {
         myPUs = new Collection();
         myEffects = new Collection();
         myBombs = new Collection();
         levelNum = param1;
         PUTimer = 0;
         bouncesLeft = 0;
         bouncesRight = 0;
         scoreLeft = 0;
         scoreRight = 0;
         lastWonPoint = "none";
         thisGameScoreLogged = false;
         ach2_lastHitValid = false;
         ach3_lastHitValid = false;
         ach4_saveTimer = 1000;
         ach8_lastHitValid = false;
         ach9_lastHitValid = false;
         ach10_activated = false;
         if(param1 % 2 == 0)
         {
            timeMode = false;
         }
         else
         {
            timeMode = true;
         }
         timeMode = true;
         inGoal = false;
         suddenDeath = false;
         heroLegBroken = false;
         oppLegBroken = false;
         xspeed = 0;
         oppxspeed = 0;
         ballSender = "hero";
         heroBombed = false;
         oppBombed = false;
         streakerAlive = false;
         streakerX = 100 + Math.random() * 600;
         heroPUSpeed = 1;
         heroPUJump = 1;
         heroPUFreeze = false;
         heroPUBombs = false;
         oppPUSpeed = 1;
         oppPUJump = 1;
         oppPUFreeze = false;
         oppPUBombs = false;
         PUFire = false;
         PUSize = 1;
         PUBouncy = 1;
         cover.displaySelf();
         gotoAndStop("game");
      }
      
      public function mouseRelease3(param1:MouseEvent) : *
      {
         --faceNum;
         if(faceNum < 1)
         {
            faceNum = teamList.length;
         }
         Head.gotoAndStop(faceNum);
         doTeamName();
      }
      
      public function mouseRelease4(param1:MouseEvent) : *
      {
         ++faceNum;
         if(faceNum > teamList.length)
         {
            faceNum = 1;
         }
         Head.gotoAndStop(faceNum);
         doTeamName();
      }
      
      public function chooseButRelease(param1:MouseEvent) : *
      {
         rf.visible = false;
         lf.visible = false;
         chooseBut.visible = false;
         nextGameBut.visible = true;
         chooseTeam.text = String("**TEAM SELECTED**");
         teamChosen = true;
         findNextOpponent();
      }
      
      public function onFrame_game() : void
      {
         var _loc1_:* = undefined;
         var _loc2_:* = undefined;
         var _loc3_:* = undefined;
         var _loc4_:* = undefined;
         if(!pauseGame)
         {
            if(key.isDown(66) && !upgradeLOCK)
            {
               if(upgradeList[0][4] > 0)
               {
                  --upgradeList[0][4];
                  upgradeLOCK = true;
                  trace("****** ZOING ******");
                  PUHandler.bonusIsGo();
               }
            }
            else if(!key.isDown(66))
            {
               upgradeLOCK = false;
            }
            _loc1_ = upgradeList[0][1];
            if(key.isDown(Keyboard.LEFT))
            {
               if(!heroPUFreeze && !heroBombed)
               {
                  xspeed -= 50 + _loc1_ * 30 + heroPUSpeed * 30;
                  if(hero.GetPosition().y > 439)
                  {
                     if(timer % 2 == 0)
                     {
                        spawnDust(true,true);
                     }
                  }
               }
            }
            _loc2_ = upgradeList[0][2];
            if(key.isDown(Keyboard.RIGHT))
            {
               if(!heroPUFreeze && !heroBombed)
               {
                  if(hero.GetPosition().x < 720)
                  {
                     xspeed += 50 + _loc2_ * 30 + heroPUSpeed * 30;
                     if(hero.GetPosition().y > 439)
                     {
                        if(timer % 2 == 0)
                        {
                           spawnDust(true,false);
                        }
                     }
                  }
               }
            }
            _loc3_ = upgradeList[0][0];
            if(key.isDown(Keyboard.UP))
            {
               if(!heroBombed)
               {
                  if(hero.GetPosition().y + YourHead.height / 2 > 459 || Math.abs(hero.GetPosition().x - opp.GetPosition().x) < 30 && hero.GetPosition().y < opp.GetPosition().y && hero.GetPosition().y > opp.GetPosition().y - 45 && hero.GetLinearVelocity().y >= 1)
                  {
                     Utils.playSound("jumpSound");
                     spawnGreenRing(true);
                     hero.SetLinearVelocity(new b2Vec2(hero.GetLinearVelocity().x,-150 + _loc3_ * -30 + heroPUJump * -50));
                  }
               }
            }
            _loc4_ = upgradeList[0][3];
            if(!TwoPlayers)
            {
               if(!key.isDown(Keyboard.SPACE))
               {
                  if(!heroBombed)
                  {
                     heroJoint.SetMotorSpeed(-6 * (heroJoint.GetJointAngle() + Math.PI - 1.2 - 1.67));
                  }
               }
               else if(!heroBombed)
               {
                  if(!heroLegBroken)
                  {
                     heroJoint.SetMotorSpeed((-12 - _loc4_ * 2) * (heroJoint.GetJointAngle() - 0.2 - 1.67));
                  }
               }
            }
            else if(!key.isDown(80))
            {
               if(!heroBombed)
               {
                  heroJoint.SetMotorSpeed(-6 * (heroJoint.GetJointAngle() + Math.PI - 1.2 - 1.67));
               }
            }
            else if(!heroBombed)
            {
               if(!heroLegBroken)
               {
                  heroJoint.SetMotorSpeed(-12 * (heroJoint.GetJointAngle() - 0.2 - 1.67));
               }
            }
            xspeed *= 0.7;
            hero.SetLinearVelocity(new b2Vec2(xspeed,hero.GetLinearVelocity().y + 5));
            if(!TwoPlayers)
            {
               ++pointTimer;
               if(pointTimer < 500)
               {
                  oppRightCap = 400;
               }
               else if(pointTimer < 1000)
               {
                  oppRightCap = 500;
               }
               else if(pointTimer < 1500)
               {
                  oppRightCap = 600;
               }
               else
               {
                  oppRightCap = 700;
               }
               if(AI_levelNum % 3 != 0)
               {
                  oppRightCap = 1000;
               }
               if(ball.GetPosition().x < opp.GetPosition().x + 20 && opp.GetPosition().x > 75 && ball.GetPosition().x < oppRightCap)
               {
                  if(!oppPUFreeze && !oppBombed)
                  {
                     oppxspeed -= (30 + oppPUSpeed * 20) * (1 + AI_levelNum / 20);
                     if(opp.GetPosition().y > 439)
                     {
                        if(timer % 2 == 0)
                        {
                           spawnDust(false,true);
                        }
                     }
                  }
               }
               if(oppracket.GetAngle() < 0.4 && ball.GetPosition().y > opp.GetPosition().y - 20 && ball.GetPosition().x < opp.GetPosition().x + 70 && ball.GetPosition().x > opp.GetPosition().x)
               {
                  if(!oppPUFreeze && !oppBombed)
                  {
                     oppxspeed -= (30 + oppPUSpeed * 20) * (1 + AI_levelNum / 20);
                     if(opp.GetPosition().y > 439)
                     {
                        if(timer % 2 == 0)
                        {
                           spawnDust(false,true);
                        }
                     }
                  }
               }
               else if(ball.GetPosition().x > opp.GetPosition().x + 25 && ball.GetPosition().x < oppRightCap)
               {
                  if(!oppPUFreeze && !oppBombed)
                  {
                     oppxspeed += (30 + oppPUSpeed * 20) * (1 + AI_levelNum / 20);
                     if(opp.GetPosition().y > 439)
                     {
                        if(timer % 2 == 0)
                        {
                           spawnDust(false,false);
                        }
                     }
                  }
               }
               if(ball.GetPosition().x < opp.GetPosition().x || ball.GetPosition().x < opp.GetPosition().x + 80 && ball.GetPosition().y < opp.GetPosition().y - 30 && ball.GetLinearVelocity().x < 0)
               {
                  if(opp.GetPosition().y + Heads.height / 2 > 459)
                  {
                     spawnGreenRing(false);
                     opp.SetLinearVelocity(new b2Vec2(opp.GetLinearVelocity().x,-175 + -40 * (AI_levelNum / 10) + oppPUJump * -50));
                  }
               }
               if(ball.GetPosition().y > opp.GetPosition().y - 20 && ball.GetPosition().x < opp.GetPosition().x + 70 && ball.GetPosition().x > opp.GetPosition().x && oppxspeed >= 0 && !oppLegBroken && !oppLegLastUp)
               {
                  oppJoint.SetMotorSpeed(-10 * (oppJoint.GetJointAngle() + Math.PI - 1.2 - Math.PI / 2 + 1.67));
               }
               else
               {
                  oppJoint.SetMotorSpeed(-6 * (oppJoint.GetJointAngle() - 0.2 - Math.PI / 2 + 1.67));
               }
               if(oppracket.GetAngle() < 0.2)
               {
                  oppLegLastUp = true;
               }
               else if(oppracket.GetAngle() > 1.5)
               {
                  oppLegLastUp = false;
               }
               oppxspeed *= 0.7;
               kickOppXSP *= 0.8;
               opp.SetLinearVelocity(new b2Vec2(oppxspeed + kickOppXSP,opp.GetLinearVelocity().y + 10));
            }
            else
            {
               if(key.isDown(65))
               {
                  if(!oppPUFreeze && !oppBombed)
                  {
                     oppxspeed -= 50 + oppPUSpeed * 30;
                     if(opp.GetPosition().y > 439)
                     {
                        if(timer % 2 == 0)
                        {
                           spawnDust(false,true);
                        }
                     }
                  }
               }
               if(key.isDown(68))
               {
                  if(!oppPUFreeze && !oppBombed)
                  {
                     if(opp.GetPosition().x < 720)
                     {
                        oppxspeed += 50 + oppPUSpeed * 30;
                        if(opp.GetPosition().y > 439)
                        {
                           if(timer % 2 == 0)
                           {
                              spawnDust(false,false);
                           }
                        }
                     }
                  }
               }
               if(key.isDown(87))
               {
                  if(!oppBombed)
                  {
                     if(opp.GetPosition().y + Heads.height / 2 > 459)
                     {
                        trace("LEFT GO UP");
                        Utils.playSound("jumpSound");
                        spawnGreenRing(false);
                        opp.SetLinearVelocity(new b2Vec2(opp.GetLinearVelocity().x,-150 + oppPUJump * -50));
                     }
                     else
                     {
                        trace("LEFT YOU NO GO UP OK !!!");
                     }
                  }
               }
               if(!key.isDown(Keyboard.SPACE))
               {
                  if(!oppBombed)
                  {
                     oppJoint.SetMotorSpeed(-6 * (oppJoint.GetJointAngle() - 0.2 - Math.PI / 2 + 1.67));
                  }
               }
               else if(!oppBombed)
               {
                  if(!oppLegBroken)
                  {
                     oppJoint.SetMotorSpeed(-12 * (oppJoint.GetJointAngle() + Math.PI - 1.2 - Math.PI / 2 + 1.67));
                  }
               }
               oppxspeed *= 0.7;
               opp.SetLinearVelocity(new b2Vec2(oppxspeed,opp.GetLinearVelocity().y + 5));
            }
            --ach17_timer;
            if(opp.GetPosition().x < 120 && ach17_timer > 0)
            {
               achAward.Award(17);
            }
            if(streakerAlive)
            {
               if(Math.abs(streaker.GetPosition().x - streakerX) < 10)
               {
                  streakerX = 100 + Math.random() * 600;
               }
               else if(streaker.GetPosition().x < streakerX)
               {
                  streaker.SetLinearVelocity(new b2Vec2(100,streaker.GetLinearVelocity().y));
               }
               else
               {
                  streaker.SetLinearVelocity(new b2Vec2(-100,streaker.GetLinearVelocity().y));
               }
               if(streaker.GetPosition().y > 439)
               {
                  streaker.SetLinearVelocity(new b2Vec2(streaker.GetLinearVelocity().x,-300));
               }
            }
            if(ball.GetUserData() != null && Boolean(ball.GetUserData().hitTestObject(top1Hit)))
            {
               ball.AddToLinearVelocity(2,0);
            }
            else if(ball.GetUserData() != null && Boolean(ball.GetUserData().hitTestObject(top2Hit)))
            {
               ball.AddToLinearVelocity(-2,0);
            }
            ++ach4_saveTimer;
            if(!TwoPlayers)
            {
               if(ach4_saveTimer == 100)
               {
                  achAward.Award(4);
               }
            }
            ++timer;
            if(timer % 2 == 0)
            {
               spawnTrail();
            }
            ++PUTimer;
            if(PUTimer > 200)
            {
               spawnPU();
               PUTimer = 0;
            }
            flasher.Update();
            PUColissions();
            PUHandler.Update();
            myBombs.runFunction("Update");
            myEffects.runFunction("Update");
            UpdateTexts();
            scoreMC.Update();
            m_world.Step(m_timeStep,m_iterations,m_iterations);
            m_world.Step(m_timeStep,m_iterations,m_iterations);
            m_world.Step(m_timeStep,m_iterations,m_iterations);
            UpdateB2DBodyList();
            checkWinPoint();
            if(opp.GetUserData() != null)
            {
               if(bouncesLeft == 1)
               {
                  groundBlinker.x = 0;
                  groundBlinker.y = 460;
                  Utils.makeHighestDepth(groundBlinker);
               }
               else if(bouncesRight == 1)
               {
                  groundBlinker.x = 400;
                  groundBlinker.y = 460;
                  Utils.makeHighestDepth(groundBlinker);
               }
               else
               {
                  groundBlinker.y = -1000;
               }
               Heads.x = opp.GetUserData().x;
               Heads.y = opp.GetUserData().y;
               YourHead.x = hero.GetUserData().x;
               YourHead.y = hero.GetUserData().y;
               Shadow.x = ball.GetPosition().x;
               if(streakerAlive)
               {
                  StreakerHead.x = streaker.GetUserData().x;
                  StreakerHead.y = streaker.GetUserData().y;
               }
               else
               {
                  StreakerHead.x = StreakerHead.x = -1000;
               }
               OPPRACKET.x = oppracket.GetPosition().x;
               OPPRACKET.y = oppracket.GetPosition().y;
               OPPRACKET.rotation = oppracket.GetAngle() * 180 / Math.PI + 180;
               HERORACKET.x = racket.GetPosition().x;
               HERORACKET.y = racket.GetPosition().y;
               HERORACKET.rotation = racket.GetAngle() * 180 / Math.PI + 180;
               if(timeMode)
               {
                  ++timeLeftBitch;
                  if(timeLeftBitch >= 30)
                  {
                     --timeLeft;
                     timeLeftBitch = 0;
                     if(timeLeft <= 0)
                     {
                        checkWinTime();
                     }
                  }
                  if(timeInd != null)
                  {
                     timeInd.time_txt.text = Math.floor(timeLeft / 60) + ":" + (timeLeft % 60 < 10 ? "0" : "") + timeLeft % 60;
                     if(timeLeft < 0)
                     {
                        timeInd.time_txt.text = "0:00";
                     }
                  }
               }
            }
            removeDeleteMes();
         }
         else if(key.isDown(Keyboard.SPACE) && briefer.y < 300)
         {
            briefer.y = 1000;
            initLevel();
            trace("*** GO AWAY BRIEFER *** ");
         }
      }
      
      public function initGame() : *
      {
         briefer.y = 290;
         if(!timeMode)
         {
            briefer.gotoAndStop(2);
         }
         if(TwoPlayers)
         {
            briefer.gotoAndStop(3);
         }
         pauseGame = true;
         if(timeMode)
         {
            timeLeft = 60;
            timeLeftBitch = 0;
         }
      }
      
      public function initLevel() : void
      {
         resetWorld();
         blueprints.gotoAndStop(PITCH_levelNum + 1);
         blueprints.addEventListener(Event.RENDER,onRender);
         stage.invalidate();
         body = B2DManager.spawnBoxBody("body",-5,240,20,480,0,0.5,0,0,new InvisBlock());
         body = B2DManager.spawnBoxBody("body",805,240,20,480,0,0.5,0,0,new InvisBlock());
         body = B2DManager.spawnBoxBody("body",400,-5,800,20,0,0.5,0,0,new InvisBlock());
         body = B2DManager.spawnBoxBody("body",50,50,60,200,0,0.5,0,0,new InvisBlock());
         body.SetXForm(body.GetPosition(),45 * Math.PI / 180);
         body = B2DManager.spawnBoxBody("body",750,50,60,200,0,0.5,0,0,new InvisBlock());
         body.SetXForm(body.GetPosition(),-45 * Math.PI / 180);
         body = B2DManager.spawnBoxBody("body",-20,240,60,520,0,0.5,0,0,new InvisBlock());
         body.SetXForm(body.GetPosition(),8 * Math.PI / 180);
         body = B2DManager.spawnBoxBody("body",820,240,60,520,0,0.5,0,0,new InvisBlock());
         body.SetXForm(body.GetPosition(),-8 * Math.PI / 180);
         body = B2DManager.spawnBoxBody("body",240,-20,520,60,0,0.5,0,0,new InvisBlock());
         body.SetXForm(body.GetPosition(),-8 * Math.PI / 180);
         body = B2DManager.spawnBoxBody("body",560,-20,520,60,0,0.5,0,0,new InvisBlock());
         body.SetXForm(body.GetPosition(),8 * Math.PI / 180);
         leftGoalPost = B2DManager.spawnBoxBody("body",40,345,80,10,0,0.5,0,0,new InvisBlock());
         leftGoalPost.SetXForm(body.GetPosition(),0);
         rightGoalPost = B2DManager.spawnBoxBody("body",760,345,80,10,0,0.5,0,0,new InvisBlock());
         rightGoalPost.SetXForm(body.GetPosition(),0);
         ground = B2DManager.spawnBoxBody("body",400,470,800,20,0,0.5,0,-1,new GroundBlock());
         ball = B2DManager.spawnCircleBody("body",400,230,10,1.5,1,0.6,0,new Ball());
         ball.SetLinearVelocity(new b2Vec2(-150 + Math.random() * 300,-100));
         hero = B2DManager.spawnFixedRotCircleBody("body",600,440,20,100,0,0.01,0,new Hero());
         racket = B2DManager.spawnBoxBody("body",580,440,40,10,2,0.5,1,-1,new Racket());
         b2Body(racket).SetXForm(new b2Vec2(600 + 4,440 + 15.6),1.37 + Math.PI);
         heroJoint = B2DManager.spawnJoint("revJoint","hero","racket",100000000,hero.GetWorldCenter());
         opp = B2DManager.spawnFixedRotCircleBody("body",200,440,20,100,0,0.01,0,new Opp());
         oppracket = B2DManager.spawnBoxBody("body",220,440,40,10,2,0.5,1,-1,new OppRacket());
         b2Body(oppracket).SetXForm(new b2Vec2(200 - 4,440 + 15.6),-1.37 + Math.PI);
         oppJoint = B2DManager.spawnJoint("revJoint","opp","oppracket",100000000,opp.GetWorldCenter());
         YourHead.scaleX = YourHead.scaleY = Heads.scaleX = Heads.scaleY = HERORACKET.scaleX = HERORACKET.scaleY = OPPRACKET.scaleX = OPPRACKET.scaleY = 1;
         inst.gotoAndStop(PITCH_levelNum);
         Utils.makeHighestDepth(scores);
         scores.walls.gotoAndStop(PITCH_levelNum + 1);
         if(!TwoPlayers)
         {
            Heads.gotoAndStop(levelNum);
            YourHead.gotoAndStop(faceNum);
            if(upgradeList[0][6] > 0)
            {
               YourHead.gotoAndStop(YourHead.totalFrames);
            }
         }
         else
         {
            Heads.gotoAndStop(tpskin1);
            YourHead.gotoAndStop(tpskin2);
         }
         oppLegLastUp = false;
         kickOppXSP = 0;
         Utils.makeHighestDepth(Heads);
         Utils.makeHighestDepth(YourHead);
         Utils.makeHighestDepth(opp.GetUserData());
         Utils.makeHighestDepth(hero.GetUserData());
         Utils.makeHighestDepth(OPPRACKET);
         Utils.makeHighestDepth(HERORACKET);
         Utils.makeHighestDepth(goalmc1);
         Utils.makeHighestDepth(goalmc2);
         Utils.makeHighestDepth(Shadow);
         scoreMC.displaySelf();
         pauseGame = true;
         inst.x = -1000;
         inst.visible = false;
         streakerAlive = false;
         streakerX = 100 + Math.random() * 600;
         Counter.DisplaySelf();
         PUHandler.resetGoalSizes();
         if(!(scoreLeft == 6 || scoreRight == 6))
         {
            matchPoint.y = -100;
         }
         UpdateB2DBodyList();
         Heads.x = opp.GetUserData().x;
         Heads.y = opp.GetUserData().y;
         YourHead.x = hero.GetUserData().x;
         YourHead.y = hero.GetUserData().y;
         OPPRACKET.x = oppracket.GetPosition().x;
         OPPRACKET.y = oppracket.GetPosition().y;
         OPPRACKET.rotation = oppracket.GetAngle() * 180 / Math.PI + 180;
         HERORACKET.x = racket.GetPosition().x;
         HERORACKET.y = racket.GetPosition().y;
         HERORACKET.rotation = racket.GetAngle() * 180 / Math.PI + 180;
         pointTimer = 0;
         if(timeMode)
         {
            timeInd.y = 3;
         }
         else
         {
            timeInd.y = -100;
         }
         AI_levelNum = teamList[levelNum - 1][1];
         if(round > 11)
         {
            AI_levelNum += 3;
         }
         if(round > 22)
         {
            AI_levelNum += 4;
         }
         if(AI_levelNum > 10)
         {
            AI_levelNum == 10;
         }
         pauseBtn.visible = true;
         trace("**** AI LEVEL **** " + AI_levelNum);
         if(tpSpecials == 2)
         {
            PUHandler.smallGoalIsGo();
            PUHandler.smallGoalIsGo2();
         }
         else if(tpSpecials == 1)
         {
            PUHandler.bigGoalIsGo();
            PUHandler.bigGoalIsGo2();
         }
         if(upgradeList[0][5] > 0)
         {
            PUHandler.smallGoalIsGo();
         }
      }
      
      public function menuCalled() : *
      {
         scoreLeft = 3;
         scoreRight = 0;
         checkWinTime();
      }
      
      public function onRender(param1:Event) : void
      {
         blueprints.spawnProps();
         blueprints.removeEventListener(Event.RENDER,onRender);
      }
      
      public function pointComp(param1:*) : *
      {
         var pointName:String = null;
         var whom:* = param1;
         if(!suddenDeath)
         {
            inGoal = true;
            goalWords.y = 80;
            Utils.makeHighestDepth(goalWords);
            pointName = teamLeftName;
            if(whom == faceNum)
            {
               pointName = teamRightName;
            }
            goalWords.goalText.text = String("Goal to " + pointName + " !");
            if(streaker != null && streaker.GetUserData() != null && streaker.GetUserData().parent != null)
            {
               removeBody(streaker);
               streakerAlive = false;
            }
            Utils.addTimeFunction(15,function():*
            {
               inGoal = false;
               goalWords.y = -1000;
               resetPUVars();
               bouncesLeft = 0;
               bouncesRight = 0;
               cover.displaySelf();
               clearGameAssets();
               if(!checkWin())
               {
                  initLevel();
               }
            });
         }
         else
         {
            checkWinTime();
         }
      }
      
      public function UpdateTexts() : *
      {
         scores.sr_txt.text = "" + scoreRight;
         scores.sl_txt.text = "" + scoreLeft;
      }
      
      public function spawnPU() : *
      {
         var _loc1_:MovieClip = null;
         Utils.playSound("popSound");
         var _loc2_:uint = Math.ceil(Math.random() * 18);
         switch(_loc2_)
         {
            case 1:
               _loc1_ = new PU_Speed_Good();
               break;
            case 2:
               _loc1_ = new PU_Speed_Bad();
               break;
            case 3:
               _loc1_ = new PU_Jump_Good();
               break;
            case 4:
               _loc1_ = new PU_Jump_Bad();
               break;
            case 5:
               _loc1_ = new PU_Ice_Good();
               break;
            case 6:
               _loc1_ = new PU_Ice_Bad();
               break;
            case 7:
               _loc1_ = new PU_Bombs_Good();
               break;
            case 8:
               _loc1_ = new PU_Bombs_Bad();
               break;
            case 9:
               _loc1_ = new PU_Fireground_Neu();
               break;
            case 10:
               _loc1_ = new PU_Bigball_Neu();
               break;
            case 11:
               _loc1_ = new PU_Bouncyball_Neu();
               break;
            case 12:
               _loc1_ = new PU_Smallball_Neu();
               break;
            case 13:
               _loc1_ = new PU_Deadball_Neu();
               break;
            case 14:
               _loc1_ = new PU_Size_Good();
               break;
            case 15:
               _loc1_ = new PU_Size_Bad();
               break;
            case 16:
               _loc1_ = new PU_Break_Good();
               break;
            case 17:
               _loc1_ = new PU_Break_Bad();
               break;
            case 18:
               _loc1_ = new PU_Streaker_Neu();
         }
         _loc1_.x = 220 + Math.random() * 360;
         _loc1_.y = 150 + Math.random() * 270;
         _loc1_.timer = 600;
         _loc1_.deleteme = false;
         myPUs.addItems(_loc1_);
         addChild(_loc1_);
         spawn4Rings(_loc1_.x,_loc1_.y);
      }
      
      public function PUColissions() : *
      {
         var _loc1_:MovieClip = null;
         for each(_loc1_ in myPUs.itemList)
         {
            --_loc1_.timer;
            if(_loc1_.timer < 0)
            {
               _loc1_.deleteme = true;
            }
            if(SuperMath.getDistance(_loc1_,ball.GetUserData()) < 35)
            {
               PUHandler.gotOne(ballSender,_loc1_);
               trace(ballSender + "    :    " + _loc1_);
               _loc1_.deleteme = true;
            }
         }
      }
      
      public function spawnBomb() : *
      {
         var _loc1_:Bomb = new Bomb();
         _loc1_.y = 50;
         _loc1_.x = 20 + Math.random() * 760;
         _loc1_.deleteme = false;
         _loc1_.yspeed = 0;
         myBombs.addItems(_loc1_);
         addChild(_loc1_);
         spawn4Rings(_loc1_.x,_loc1_.y);
      }
      
      public function updateBall() : *
      {
         var _loc1_:Number = ball.GetPosition().x;
         var _loc2_:Number = ball.GetPosition().y;
         var _loc3_:b2Vec2 = ball.GetLinearVelocity();
         var _loc4_:Number = ball.GetAngularVelocity();
         removeBody(ball);
         ball = B2DManager.spawnCircleBody("body",_loc1_,_loc2_,5 + PUSize * 5,0.6,1,0.3 + PUBouncy * 0.3,0,new Ball());
         ball.SetLinearVelocity(_loc3_);
         ball.SetAngularVelocity(_loc4_);
         if(PUBouncy == 0)
         {
            ball.GetUserData().inside.gotoAndStop(3);
         }
         else if(PUBouncy == 1)
         {
            ball.GetUserData().inside.gotoAndStop(1);
         }
         else
         {
            ball.GetUserData().inside.gotoAndStop(2);
         }
         spawn4Rings(_loc1_,_loc2_);
      }
      
      public function resetPUVars() : *
      {
         ballSender = "hero";
         heroBombed = false;
         oppBombed = false;
         heroPUSpeed = 1;
         heroPUJump = 1;
         heroPUFreeze = false;
         heroPUBombs = false;
         oppPUSpeed = 1;
         oppPUJump = 1;
         oppPUFreeze = false;
         oppPUBombs = false;
         PUFire = false;
         PUSize = 1;
         PUBouncy = 1;
      }
      
      public function spawnTrail() : *
      {
         var _loc1_:Trail = new Trail();
         _loc1_.x = ball.GetPosition().x;
         _loc1_.y = ball.GetPosition().y;
         _loc1_.deleteme = false;
         _loc1_.timer = 0;
         myEffects.addItems(_loc1_);
         addChild(_loc1_);
         Utils.makeHighestDepth(ball.GetUserData());
         Utils.makeHighestDepth(goalmc1);
         Utils.makeHighestDepth(goalmc2);
      }
      
      public function spawnRing(param1:Number, param2:Number) : *
      {
         var _loc3_:Ring = new Ring();
         _loc3_.x = param1;
         _loc3_.y = param2;
         _loc3_.deleteme = false;
         myEffects.addItems(_loc3_);
         addChild(_loc3_);
      }
      
      public function spawn4Rings(param1:Number, param2:Number) : *
      {
         spawnRing(param1 - 10,param2 - 10);
         spawnRing(param1 + 10,param2 - 10);
         spawnRing(param1 - 10,param2 + 10);
         spawnRing(param1 + 10,param2 + 10);
      }
      
      public function spawnGreenRing(param1:Boolean) : *
      {
         var _loc2_:* = undefined;
         if(param1)
         {
            if(heroPUJump == 0)
            {
               _loc2_ = new RedRing();
            }
            else if(heroPUJump == 1 || heroPUJump == 2)
            {
               _loc2_ = new GreenRing();
            }
            _loc2_.x = hero.GetPosition().x;
            _loc2_.y = hero.GetPosition().y + 20;
         }
         else
         {
            if(oppPUJump == 0)
            {
               _loc2_ = new RedRing();
            }
            else if(oppPUJump == 1 || oppPUJump == 2)
            {
               _loc2_ = new GreenRing();
            }
            _loc2_.x = opp.GetPosition().x;
            _loc2_.y = opp.GetPosition().y + 20;
         }
         _loc2_.deleteme = false;
         _loc2_.width = 60;
         _loc2_.height = 30;
         myEffects.addItems(_loc2_);
         addChild(_loc2_);
         if(param1 && heroPUJump == 2)
         {
            _loc2_ = new GreenRing();
            _loc2_.x = hero.GetPosition().x;
            _loc2_.y = hero.GetPosition().y;
            _loc2_.deleteme = false;
            _loc2_.width = 60;
            _loc2_.height = 30;
            myEffects.addItems(_loc2_);
            addChild(_loc2_);
         }
         else if(!param1 && oppPUJump == 2)
         {
            _loc2_ = new GreenRing();
            _loc2_.x = opp.GetPosition().x;
            _loc2_.y = opp.GetPosition().y;
            _loc2_.deleteme = false;
            _loc2_.width = 60;
            _loc2_.height = 30;
            myEffects.addItems(_loc2_);
            addChild(_loc2_);
         }
         if(param1)
         {
            Utils.makeHighestDepth(YourHead);
            Utils.makeHighestDepth(hero.GetUserData());
            Utils.makeHighestDepth(HERORACKET);
         }
         else
         {
            Utils.makeHighestDepth(Heads);
            Utils.makeHighestDepth(opp.GetUserData());
            Utils.makeHighestDepth(OPPRACKET);
         }
      }
      
      public function spawnDust(param1:Boolean, param2:Boolean) : *
      {
         var _loc3_:Dust = new Dust();
         _loc3_.y = 460;
         _loc3_.yspeed = Math.random() * -2;
         if(param1)
         {
            _loc3_.x = hero.GetPosition().x;
         }
         else
         {
            _loc3_.x = opp.GetPosition().x;
         }
         if(param2)
         {
            _loc3_.xspeed = Math.random() * 2 + 2;
         }
         else
         {
            _loc3_.xspeed = -1 * (Math.random() * 2 + 2);
         }
         _loc3_.deleteme = false;
         _loc3_.timer = 0;
         myEffects.addItems(_loc3_);
         addChild(_loc3_);
      }
      
      public function checkWinPoint() : *
      {
         if(!inGoal)
         {
            if(goal1Hit.hitTestObject(ball.GetUserData()))
            {
               lastWonPoint = "hero";
               ++scoreRight;
               Utils.playSound("dieSound");
               Utils.playSound("cheerSound");
               if(!TwoPlayers)
               {
                  if(ach2_lastHitValid)
                  {
                     achAward.Award(2);
                  }
                  if(ach3_lastHitValid)
                  {
                     achAward.Award(3);
                  }
                  if(timeMode && timeLeft <= 5 && scoreRight == scoreLeft + 1 && !suddenDeath)
                  {
                     achAward.Award(5);
                  }
                  if(timeMode && timeLeft > 55)
                  {
                     achAward.Award(6);
                  }
                  if(ach8_lastHitValid)
                  {
                     achAward.Award(8);
                  }
                  if(ach9_lastHitValid)
                  {
                     achAward.Award(9);
                  }
                  if(streakerAlive)
                  {
                     achAward.Award(11);
                  }
                  if(ach13_lastHitValid)
                  {
                     achAward.Award(13);
                  }
                  if(b2Body(hero).GetUserData().height < 30)
                  {
                     achAward.Award(14);
                  }
                  if(goalmc1.currentFrame == 3)
                  {
                     achAward.Award(15);
                  }
                  if(b2Body(hero).GetUserData().height > 50)
                  {
                     achAward.Award(16);
                  }
               }
               pointComp(faceNum);
            }
            else if(goal2Hit.hitTestObject(ball.GetUserData()))
            {
               trace("GOAL 2 user data" + ball.GetUserData().width);
               lastWonPoint = "opp";
               ++scoreLeft;
               Utils.playSound("dieSound");
               ach4_saveTimer = 1000;
               if(scoreLeft >= scoreRight + 3)
               {
                  ach10_activated = true;
               }
               pointComp(nextOpponent);
            }
         }
      }
      
      public function checkWin() : Boolean
      {
         if(!timeMode)
         {
            if(scoreLeft >= winMargin)
            {
               if(!wonArray[levelNum - 1])
               {
                  if(heroScoreArray[levelNum - 1] <= scoreRight)
                  {
                     updateScoresWithWin(false,0);
                  }
               }
               wonMatch(nextOpponent);
               return true;
            }
            if(scoreRight >= winMargin)
            {
               if(wonArray[levelNum - 1])
               {
                  if(oppScoreArray[levelNum - 1] >= scoreLeft)
                  {
                     updateScoresWithWin(true,0);
                  }
               }
               else
               {
                  updateScoresWithWin(true,0);
               }
               wonMatch(faceNum);
               return true;
            }
         }
         return false;
      }
      
      public function checkWinTime() : *
      {
         if(!TwoPlayers)
         {
            if(scoreLeft > scoreRight)
            {
               updateScoresWithWin(false,0);
               wonMatch(nextOpponent);
            }
            else if(scoreLeft == scoreRight)
            {
               updateScoresWithWin(false,1);
               wonMatch(-1);
            }
            else
            {
               updateScoresWithWin(true,3);
               wonMatch(faceNum);
            }
         }
         else
         {
            trace("************************ ingoal " + inGoal + " twpl ayers " + TwoPlayers);
            achAward.Award(7);
            playerWins.y = 40;
            if(scoreLeft > scoreRight)
            {
               playerWins.gotoAndStop(1);
            }
            else if(scoreLeft < scoreRight)
            {
               playerWins.gotoAndStop(2);
            }
            else
            {
               playerWins.gotoAndStop(3);
            }
            pauseGame = true;
            Utils.playSound("whistleSound");
            Utils.addTimeFunction(100,function():*
            {
               wonMatch2P();
            });
         }
      }
      
      public function wonMatch(param1:*) : *
      {
         var pointName:String = null;
         var whom:* = param1;
         trace("************************ ingoal " + inGoal + " twpl ayers " + TwoPlayers);
         if(!inGoal)
         {
            if(!TwoPlayers)
            {
               if(scoreLeft == 0)
               {
                  achAward.Award(1);
               }
               if(ach10_activated && scoreLeft < scoreRight)
               {
                  achAward.Award(10);
               }
            }
            else
            {
               trace("*************************** TWO PLAYERS AND OUT");
               achAward.Award(7);
            }
            inGoal = true;
            Utils.playSound("whistleSound");
            goalWords.gotoAndStop(2);
            goalWords.y = 80;
            if(whom != -1)
            {
               pointName = teamLeftName;
               if(whom == faceNum)
               {
                  pointName = teamRightName;
               }
               goalWords.goalText.text = String(pointName + " win !");
            }
            else
            {
               goalWords.goalText.text = String("Its a DRAW !");
            }
            Utils.makeHighestDepth(goalWords);
            Utils.addTimeFunction(60,function():*
            {
               inGoal = false;
               readyToLeaveFrame();
               useSmallGoalUpgrade();
               if(TwoPlayers)
               {
                  gotoAndStop("menu");
               }
               else
               {
                  gotoAndStop("levelSelect");
               }
            });
         }
      }
      
      public function useSmallGoalUpgrade() : *
      {
         if(upgradeList[0][5] > 0)
         {
            upgradeList[0][5] = upgradeList[0][5] - 1;
         }
         if(upgradeList[0][6] > 0)
         {
            upgradeList[0][6] = upgradeList[0][6] - 1;
         }
      }
      
      public function wonMatch2P() : *
      {
         achAward.Award(7);
         readyToLeaveFrame();
         gotoAndStop("menu");
      }
      
      public function updateScoresWithWin(param1:Boolean, param2:*) : *
      {
         var _loc3_:* = undefined;
         if(!thisGameScoreLogged && !TwoPlayers)
         {
            thisGameScoreLogged = true;
            trace("************************* SCORE UPDATE INNIT PLUS SAVE GAME");
            _loc3_ = 3;
            if(param2 == 3)
            {
               _loc3_ = 0;
            }
            if(param2 == 1)
            {
               _loc3_ = 1;
            }
            doResults(true,scoreLeft,scoreRight);
            saveGame();
         }
      }
      
      public function makeHeroBig() : *
      {
         var _loc1_:Number = hero.GetPosition().x;
         var _loc2_:Number = hero.GetPosition().y;
         removeBody(hero);
         hero = B2DManager.spawnFixedRotCircleBody("body",_loc1_,_loc2_,30,100,0,0.01,0,new Hero());
         YourHead.scaleX = 1.5;
         YourHead.scaleY = 1.5;
         removeBody(racket);
         racket = B2DManager.spawnBoxBody("body",_loc1_ - 30,_loc2_,60,15,2,0.5,1,-1,new Racket());
         b2Body(racket).SetXForm(new b2Vec2(_loc1_ + 4 * 1.5,_loc2_ + 15.6 * 1.5),1.37 + Math.PI);
         HERORACKET.scaleX = 1.5;
         HERORACKET.scaleY = 1.5;
         Utils.makeHighestDepth(HERORACKET);
         heroJoint = B2DManager.spawnJoint("revJoint","hero","racket",100000000,hero.GetWorldCenter());
      }
      
      public function makeHeroSmall() : *
      {
         var _loc1_:Number = hero.GetPosition().x;
         var _loc2_:Number = hero.GetPosition().y;
         removeBody(hero);
         hero = B2DManager.spawnFixedRotCircleBody("body",_loc1_,_loc2_,10,100,0,0.01,0,new Hero());
         YourHead.scaleX = 0.5;
         YourHead.scaleY = 0.5;
         removeBody(racket);
         racket = B2DManager.spawnBoxBody("body",_loc1_ - 10,_loc2_,20,5,2,0.5,1,-1,new Racket());
         b2Body(racket).SetXForm(new b2Vec2(_loc1_ + 4 * 0.5,_loc2_ + 15.6 * 0.5),1.37 + Math.PI);
         HERORACKET.scaleX = 0.5;
         HERORACKET.scaleY = 0.5;
         Utils.makeHighestDepth(HERORACKET);
         heroJoint = B2DManager.spawnJoint("revJoint","hero","racket",100000000,hero.GetWorldCenter());
      }
      
      public function makeHeroNormal() : *
      {
         var _loc1_:Number = hero.GetPosition().x;
         var _loc2_:Number = hero.GetPosition().y;
         removeBody(hero);
         hero = B2DManager.spawnFixedRotCircleBody("body",_loc1_,_loc2_,20,100,0,0.01,0,new Hero());
         YourHead.scaleX = 1;
         YourHead.scaleY = 1;
         removeBody(racket);
         racket = B2DManager.spawnBoxBody("body",_loc1_ - 20,_loc2_,40,10,2,0.5,1,-1,new Racket());
         b2Body(racket).SetXForm(new b2Vec2(_loc1_ + 4 * 1,_loc2_ + 15.6 * 1),1.37 + Math.PI);
         HERORACKET.scaleX = 1;
         HERORACKET.scaleY = 1;
         Utils.makeHighestDepth(HERORACKET);
         heroJoint = B2DManager.spawnJoint("revJoint","hero","racket",100000000,hero.GetWorldCenter());
      }
      
      public function makeOppBig() : *
      {
         var _loc1_:Number = opp.GetPosition().x;
         var _loc2_:Number = opp.GetPosition().y;
         removeBody(opp);
         opp = B2DManager.spawnFixedRotCircleBody("body",_loc1_,_loc2_,30,100,0,0.01,0,new Opp());
         Heads.scaleX = 1.5;
         Heads.scaleY = 1.5;
         removeBody(oppracket);
         oppracket = B2DManager.spawnBoxBody("body",_loc1_ + 30,_loc2_,60,15,2,0.5,1,-1,new OppRacket());
         b2Body(oppracket).SetXForm(new b2Vec2(_loc1_ - 4 * 1.5,_loc2_ + 15.6 * 1.5),-1.37 + Math.PI);
         OPPRACKET.scaleX = 1.5;
         OPPRACKET.scaleY = 1.5;
         Utils.makeHighestDepth(OPPRACKET);
         oppJoint = B2DManager.spawnJoint("revJoint","opp","oppracket",100000000,opp.GetWorldCenter());
      }
      
      public function makeOppSmall() : *
      {
         var _loc1_:Number = opp.GetPosition().x;
         var _loc2_:Number = opp.GetPosition().y;
         removeBody(opp);
         opp = B2DManager.spawnFixedRotCircleBody("body",_loc1_,_loc2_,10,100,0,0.01,0,new Opp());
         Heads.scaleX = 0.5;
         Heads.scaleY = 0.5;
         removeBody(oppracket);
         oppracket = B2DManager.spawnBoxBody("body",_loc1_ + 10,_loc2_,20,5,2,0.5,1,-1,new OppRacket());
         b2Body(oppracket).SetXForm(new b2Vec2(_loc1_ - 4 * 0.5,_loc2_ + 15.6 * 0.5),-1.37 + Math.PI);
         OPPRACKET.scaleX = 0.5;
         OPPRACKET.scaleY = 0.5;
         Utils.makeHighestDepth(OPPRACKET);
         oppJoint = B2DManager.spawnJoint("revJoint","opp","oppracket",100000000,opp.GetWorldCenter());
      }
      
      public function makeOppNormal() : *
      {
         var _loc1_:Number = opp.GetPosition().x;
         var _loc2_:Number = opp.GetPosition().y;
         removeBody(opp);
         opp = B2DManager.spawnFixedRotCircleBody("body",_loc1_,_loc2_,20,100,0,0.01,0,new Opp());
         Heads.scaleX = 1;
         Heads.scaleY = 1;
         removeBody(oppracket);
         oppracket = B2DManager.spawnBoxBody("body",_loc1_ + 20,_loc2_,40,10,2,0.5,1,-1,new OppRacket());
         b2Body(oppracket).SetXForm(new b2Vec2(_loc1_ - 4 * 1,_loc2_ + 15.6 * 1),-1.37 + Math.PI);
         OPPRACKET.scaleX = 1;
         OPPRACKET.scaleY = 1;
         Utils.makeHighestDepth(OPPRACKET);
         oppJoint = B2DManager.spawnJoint("revJoint","opp","oppracket",100000000,opp.GetWorldCenter());
      }
      
      public function spawnStreaker() : *
      {
         if(!streakerAlive)
         {
            streaker = B2DManager.spawnFixedRotCircleBody("body",400,300,20,100,0,0.01,0,new Streaker());
            streakerAlive = true;
         }
      }
      
      public function removeDeleteMes() : void
      {
         myPUs.removeAndDestroyDeleteMes(this);
         myEffects.removeAndDestroyDeleteMes(this);
         myBombs.removeAndDestroyDeleteMes(this);
      }
      
      public function clearGameAssets() : void
      {
         RemoveAllBodies();
         myPUs.removeAndDestroyContents(this);
         myEffects.removeAndDestroyContents(this);
         myBombs.removeAndDestroyContents(this);
      }
      
      public function readyToLeaveFrame() : void
      {
         clearGameAssets();
         removeChild(scores);
         removeChild(Heads);
         removeChild(YourHead);
         removeChild(groundBlinker);
         removeChild(scoreMC);
         removeChild(OPPRACKET);
         removeChild(HERORACKET);
         removeChild(inst);
         removeChild(Counter);
         removeChild(matchPoint);
         removeChild(goalmc1);
         removeChild(goalmc2);
         removeChild(Shadow);
         removeChild(goalWords);
      }
      
      public function CollisionHappened(param1:b2ContactPoint, param2:b2Body, param3:b2Body) : *
      {
         if(param2 == ball && param3 == racket || param3 == ball && param2 == racket || param2 == ball && param3 == hero || param3 == ball && param2 == hero)
         {
            ballSender = "hero";
            if(ball.GetPosition().x > 400)
            {
               ach2_lastHitValid = true;
            }
            else
            {
               ach2_lastHitValid = false;
            }
            ach3_lastHitValid = false;
            if(hero.GetPosition().x > 600 && ball.GetLinearVelocity().x > 200)
            {
               ach4_saveTimer = 0;
            }
            if((param2 == racket || param3 == racket) && hero.GetPosition().x < 200)
            {
               ach8_lastHitValid = true;
            }
            else
            {
               ach8_lastHitValid = false;
            }
            if((param2 == racket || param3 == racket) && hero.GetPosition().y < 440)
            {
               ach13_lastHitValid = true;
            }
            else
            {
               ach13_lastHitValid = false;
            }
            if((param2 == hero || param3 == hero) && Math.abs(hero.GetPosition().x - opp.GetPosition().x) < 20 && hero.GetPosition().y < opp.GetPosition().y)
            {
               trace(true);
               ach9_lastHitValid = true;
            }
            else
            {
               ach9_lastHitValid = false;
            }
         }
         if(param2 == ball && param3 == oppracket || param3 == ball && param2 == oppracket || param2 == ball && param3 == opp || param3 == ball && param2 == opp)
         {
            ballSender = "opp";
            ach2_lastHitValid = false;
            if(opp.GetPosition().x < 300)
            {
               ach3_lastHitValid = true;
            }
            else
            {
               ach3_lastHitValid = false;
            }
            ach8_lastHitValid = false;
            ach9_lastHitValid = false;
            ach13_lastHitValid = false;
         }
         if(param2 == ball || param3 == ball)
         {
            if(SuperMath.pythag(param1.velocity.x,param1.velocity.y,"x") > 200)
            {
               if(param2 == racket || param2 == oppracket || param3 == racket || param3 == oppracket)
               {
                  Utils.playSound("kickSound");
               }
               else
               {
                  Utils.playSound("kickSound");
               }
               spawnRing(ball.GetPosition().x,ball.GetPosition().y);
            }
         }
         if(param2 == racket && param3 == opp || param3 == opp && param2 == racket)
         {
            if(!TwoPlayers && racket.GetAngle() < 6 && racket.GetAngle() > 4.75 && key.isDown(Keyboard.SPACE))
            {
               ach17_timer = 100;
               kickOppXSP = -600;
               opp.SetLinearVelocity(new b2Vec2(opp.GetLinearVelocity().x,opp.GetLinearVelocity().y - 60));
            }
         }
      }
      
      public function UpdateB2DBodyList() : void
      {
         var _loc1_:b2Body = m_world.GetBodyList();
         while(_loc1_)
         {
            if(_loc1_.m_userData is Sprite)
            {
               _loc1_.m_userData.x = _loc1_.GetPosition().x;
               _loc1_.m_userData.y = _loc1_.GetPosition().y;
               _loc1_.m_userData.rotation = _loc1_.GetAngle() * (180 / Math.PI) % 360;
            }
            _loc1_ = _loc1_.GetNext();
         }
      }
      
      public function RemoveAllBodies() : void
      {
         var _loc1_:Collection = new Collection();
         var _loc2_:b2Body = m_world.GetBodyList();
         while(_loc2_)
         {
            if(_loc2_.m_userData is Sprite)
            {
               _loc1_.addItems(_loc2_);
            }
            _loc2_ = _loc2_.GetNext();
         }
         for each(_loc2_ in _loc1_.itemList)
         {
            removeBody(_loc2_);
         }
      }
      
      public function onFrame_results() : void
      {
      }
      
      public function submitScore() : *
      {
         if(MovieClip(root).ens.name_txt.text == "Enter Name")
         {
            MovieClip(root).ens.plEnter.play();
         }
         else
         {
            MovieClip(root).playerName = MovieClip(root).ens.name_txt.text;
            MovieClip(root).gotoAndStop("hscores");
         }
      }
      
      public function handleComplete(param1:Event) : *
      {
         trace("THAT WAS OK");
      }
      
      internal function frame1() : *
      {
         key = new KeyPoll(this.stage);
         Utils.init(this);
         Utils.ChangeRightClickMenu();
         if(Utils.isOnSite("mousebreaker.com"))
         {
         }
         tpGameTypeList = new Array();
         team_id_count = 0;
         teamList = new Array();
         teamChosen = false;
         round = 1;
         nextOpponent = 2;
         tpGameType = 0;
         tpPitch = 2;
         tpGameTypeList = ["timed","first to seven","golden gun"];
         specialsHeadList = ["Holland","Portugal","France \'98","France \'70","Brazil \'98","Italy \'82","France \'90","Argentina","Brazil \'70"];
         tpSpecials = 0;
         tpSpecialsList = ["regular","big goals","small goals"];
         upgradeList = [[0,0,0,0,0,0,0],[750,500,500,500,1000,500,0],["jump","rush","backtrack","kick","special","goal","bear"],[3,3,3,3,3,1,1]];
         upgradePoints = 0;
         upgradeLOCK = false;
         SPECIAL_HEADS = false;
         BEAR_HEAD = false;
         resetLeagueData();
         fixture_list = new Array();
         fixture_list[1] = "13 Aug 2011 03v2007v0208v1513v0417v0619v1211v01";
         fixture_list[2] = "14 Aug 2011 14v0518v10";
         fixture_list[3] = "15 Aug 2011 09v16";
         fixture_list[4] = "20 Aug 2011 15v1101v0802v0306v1312v1416v1920v0705v18";
         fixture_list[5] = "21 Aug 2011 04v09";
         fixture_list[6] = "22 Aug 2011 10v17";
         fixture_list[7] = "27 Aug 2011 02v2003v0605v1211v0716v1518v1419v1308v04";
         fixture_list[8] = "28 Aug 2011 17v0910v01";
         fixture_list[9] = "10 Sep 2011 01v1606v0209v1914v0815v0520v1704v10";
         fixture_list[10] = "11 Sep 2011 12v1807v03";
         fixture_list[11] = "12 Sep 2011 13v11";
         fixture_list[12] = "17 Sep 2011 03v0102v1104v1206v1907v0915v1416v1820v13";
         fixture_list[13] = "18 Sep 2011 17v0810v05";
         fixture_list[14] = "24 Sep 2011 09v0601v0405v1608v2011v0318v0719v1714v10";
         fixture_list[15] = "25 Sep 2011 13v02";
         fixture_list[16] = "26 Sep 2011 12v15";
         fixture_list[17] = "01 Oct 2011 06v0802v1903v0907v1310v1215v1816v1420v11";
         fixture_list[18] = "02 Oct 2011 04v0517v01";
         fixture_list[19] = "15 Oct 2011 08v1001v1512v1613v0314v0719v0405v06";
         fixture_list[20] = "16 Oct 2011 18v2009v0211v17";
         fixture_list[21] = "22 Oct 2011 20v1601v1402v1803v1704v1507v0611v1908v12";
         fixture_list[22] = "23 Oct 2011 10v0913v05";
         fixture_list[23] = "29 Oct 2011 06v1005v0109v2012v0315v0216v0419v0718v08";
         fixture_list[24] = "30 Oct 2011 17v13";
         fixture_list[25] = "31 Oct 2011 14v11";
         fixture_list[26] = "05 Nov 2011 11v0601v1802v1203v0504v1408v1610v1513v09";
         fixture_list[27] = "06 Nov 2011 20v1907v17";
         fixture_list[28] = "19 Nov 2011 12v0106v2009v1114v1315v0718v0419v0316v10";
         fixture_list[29] = "20 Nov 2011 05v08";
         fixture_list[30] = "21 Nov 2011 17v02";
         fixture_list[31] = "26 Nov 2011 04v0605v2010v1112v1315v1918v1701v07";
         fixture_list[32] = "27 Nov 2011 16v0208v09";
         fixture_list[33] = "28 Nov 2011 14v03";
         fixture_list[34] = "03 Dec 2011 02v1003v1606v1407v0809v1211v0513v1817v0419v0120v15";
         fixture_list[35] = "10 Dec 2011 01v0604v0205v0908v1310v2012v1114v1715v0316v0718v19";
         fixture_list[36] = "17 Dec 2011 02v0803v1806v1207v0409v0111v1613v1017v1519v0520v14";
         fixture_list[37] = "20 Dec 2011 17v0519v0820v1213v15";
         fixture_list[38] = "21 Dec 2011 02v0109v1411v1803v0406v1607v10";
         fixture_list[39] = "26 Dec 2011 05v0701v2004v1108v0310v1912v1714v0215v0616v1318v09";
         fixture_list[40] = "31 Dec 2011 08v1101v1304v2005v0210v0312v0714v1915v0916v1718v06";
         fixture_list[41] = "02 Jan 2012 02v1603v1406v0407v0109v0811v1013v1217v1819v1520v05";
         fixture_list[42] = "14 Jan 2012 02v0603v0705v1508v1410v0411v1316v0117v2018v1219v09";
         fixture_list[43] = "21 Jan 2012 01v1004v0806v0307v1109v1712v0513v1914v1815v1620v02";
         fixture_list[44] = "31 Jan 2012 15v1216v0517v1920v0804v0110v14";
         fixture_list[45] = "01 Feb 2012 02v1303v1106v0907v18";
         fixture_list[46] = "04 Feb 2012 01v0305v1008v1709v0711v0212v0413v2014v1518v1619v06";
         fixture_list[47] = "11 Feb 2012 02v0903v1304v1906v0507v1410v0815v0116v1217v11";
         fixture_list[48] = "12 Feb 2012 20v18";
         fixture_list[49] = "25 Feb 2012 01v1705v0408v0609v0311v2012v1013v0714v1618v1519v02";
         fixture_list[50] = "03 Mar 2012 03v0207v2008v0109v0411v1513v0614v1217v1018v0519v16";
         fixture_list[51] = "10 Mar 2012 01v1102v0704v1305v1406v1710v1812v1915v0816v0920v03";
         fixture_list[52] = "17 Mar 2012 02v0403v1506v0107v1609v0511v1213v0817v1419v1820v10";
         fixture_list[53] = "24 Mar 2012 01v0204v0305v1708v1910v0712v2014v0915v1316v0618v11";
         fixture_list[54] = "31 Mar 2012 02v0503v1006v1807v1209v1511v0813v0117v1619v1420v04";
         fixture_list[55] = "07 Apr 2012 01v0904v0705v1908v0210v1312v0614v2015v1716v1118v03";
         fixture_list[56] = "09 Apr 2012 02v1403v0806v1507v0509v1811v0413v1617v1219v1020v01";
         fixture_list[57] = "14 Apr 2012 08v0701v1904v1705v1110v0212v0914v0615v2016v0318v13";
         fixture_list[58] = "21 Apr 2012 01v0502v1503v1204v1607v1908v1810v0611v1413v1720v09";
         fixture_list[59] = "28 Apr 2012 05v1306v0709v1012v0814v0115v0416v2017v0318v0219v11";
         fixture_list[60] = "05 May 2012 01v1202v1703v1904v1807v1508v0510v1611v0913v1420v06";
         fixture_list[61] = "13 May 2012 05v0306v1109v1312v0214v0415v1016v0817v0718v0119v20";
         MochiAd.showPreGameAd({
            "clip":root,
            "id":"c40c776361f00fe3",
            "res":"800x540"
         });
      }
      
      internal function frame2() : *
      {
         stop();
      }
      
      internal function frame3() : *
      {
         muteMusic = false;
         muteSound = false;
         pauseGame = false;
         addEventListener(Event.ENTER_FRAME,onFrame);
         wonArray = new Array(false,false,false,false,false,false,false,false,false,false);
         heroScoreArray = new Array(0,0,0,0,0,0,0,0,0,0);
         oppScoreArray = new Array(0,0,0,0,0,0,0,0,0,0);
         oppNameArray = new Array("Wine Runey","Rude Gullsnest","Cristiano Rollover","Zizu Top","Michel La-Tiny","Ronald O","Roberto Badgero","Eric Canteena","Mary Donna","Peely");
         placeToGoFromInst = "menu";
         tpskin1 = 1;
         tpskin2 = 1;
         loopChannel = new SoundChannel();
         loopSound = new LoopSound();
         loopChannel = loopSound.play(0,999);
         loopChannel2 = new SoundChannel();
         loopSound2 = new LoopSound2();
         loopChannel2 = loopSound2.play(0,999);
         SetMusicVolume(0.7);
         kickSound = new KickSound();
         coinSound = new CoinSound();
         dieSound = new DieSound();
         jumpSound = new JumpSound();
         explosionSound = new ExplosionSound();
         popSound = new PopSound();
         cheerSound = new CheerSound();
         whistleSound = new WhistleSound();
         mySharedObject = SharedObject.getLocal("kChampSportsHeadsSoccer4");
         trace("file created ? " + mySharedObject.data.fileCreated);
         if(mySharedObject.data.fileCreated == undefined || mySharedObject.data.fileCreated == null)
         {
            savedGameAvailable = false;
         }
         else
         {
            savedGameAvailable = true;
         }
         B2DManager.init(this);
         myContactListener = new ContactListener(this);
         resetWorld();
      }
      
      internal function frame4() : *
      {
         stop();
      }
      
      internal function frame5() : *
      {
         stop();
         ach12 = mySharedObject.data.ach12;
         BEAR_HEAD = mySharedObject.data.BEAR_HEAD;
         round = mySharedObject.data.round;
         frameName = "menu";
         SPECIAL_HEADS = ach12;
         bgTitle.groundBg.gotoAndStop(3);
         Utils.makeHighestDepth(cover);
         if(savedGameAvailable && round < fixture_list.length)
         {
            continueBtn.alpha = 1;
            Utils.addRollOver(continueBtn,"lightTint",0.5);
         }
         else
         {
            continueBtn.alpha = 0.5;
         }
      }
      
      internal function frame14() : *
      {
         stop();
         frameName = "levelSelect";
         Utils.makeHighestDepth(cover);
         if(Boolean(wonArray[0]) && Boolean(wonArray[1]) && Boolean(wonArray[2]) && Boolean(wonArray[3]) && Boolean(wonArray[4]) && Boolean(wonArray[5]) && Boolean(wonArray[6]) && Boolean(wonArray[7]) && Boolean(wonArray[8]) && Boolean(wonArray[9]))
         {
         }
         wonEmAll = true;
         shop.visible = false;
         trace("-------------------------------------------------UPGRADE POINTS > " + upgradePoints);
         if(upgradePoints > 0)
         {
            shop.visible = true;
         }
         if(round < fixture_list.length)
         {
            wonEmAll = false;
         }
         if(wonEmAll && !TwoPlayers)
         {
            yearFinished();
         }
         else
         {
            sm.y = -1000;
            sm.clickable = false;
         }
         if(TwoPlayers)
         {
            startLevel(1);
         }
         if(!TwoPlayers && !sm.clickable)
         {
            checkIfChosen();
         }
         trace("TEAMLIST at menu = " + teamList);
         Head.gotoAndStop(faceNum);
         lf.addEventListener(MouseEvent.MOUSE_UP,mouseRelease3);
         rf.addEventListener(MouseEvent.MOUSE_UP,mouseRelease4);
         chooseBut.addEventListener(MouseEvent.MOUSE_UP,chooseButRelease);
         nextGameBut.addEventListener(MouseEvent.MOUSE_UP,startNextGame);
      }
      
      internal function frame23() : *
      {
         stop();
         frameName = "game";
         blueprints.visible = false;
         pauseBtn.visible = false;
         PITCH_levelNum = levelNum;
         if(homeADV)
         {
            PITCH_levelNum = faceNum;
         }
         winMargin = 7;
         if(TwoPlayers)
         {
            backUpFaceNum = faceNum;
            faceNum = tpskin2;
            nextOpponent = tpskin1;
            PITCH_levelNum = tpPitch - 1;
            if(tpGameTypeList[tpGameType] == "timed")
            {
               timeMode = true;
               trace("------------ TWO PLAYERS TIMED ((((((((");
            }
            else if(tpGameTypeList[tpGameType] == "golden gun")
            {
               timeMode = false;
               winMargin = 1;
               goal_txt.text = String("First to score wins!");
               trace("------------ TWO PLAYERS NOT TIMED");
            }
            else
            {
               timeMode = false;
               goal_txt.text = String("First to score SEVEN wins !");
            }
         }
         else
         {
            tpSpecials = 0;
         }
         scores.walls.gotoAndStop(PITCH_levelNum + 1);
         pitchSize = Math.ceil(teamList[PITCH_levelNum - 1][1] / 3);
         if(pitchSize > 3)
         {
            pitchSize = 3;
         }
         bgPitch.groundBg.gotoAndStop(pitchSize);
         bgPitch.groundBg.cacheAsBitmap = true;
         if(nextOpponent < teamList.length + 1)
         {
            teamLeftName = String(teamList[nextOpponent - 1][0]);
         }
         else
         {
            teamLeftName = specialsHeadList[nextOpponent - teamList.length - 1];
         }
         if(faceNum < teamList.length + 1)
         {
            teamRightName = String(teamList[faceNum - 1][0]);
         }
         else
         {
            teamRightName = specialsHeadList[faceNum - teamList.length - 1];
         }
         scores.teamLeft_txt.text = teamLeftName;
         scores.teamRight_txt.text = teamRightName;
         initGame();
         Utils.makeHighestDepth(cover);
         if(!TwoPlayers)
         {
            Heads.gotoAndStop(levelNum);
            YourHead.gotoAndStop(faceNum);
            if(upgradeList[0][6] > 0)
            {
               YourHead.gotoAndStop(YourHead.totalFrames);
            }
         }
         else
         {
            Heads.gotoAndStop(tpskin1);
            YourHead.gotoAndStop(tpskin2);
         }
      }
      
      internal function frame32() : *
      {
         stop();
         frameName = "results";
         BEAR_HEAD = true;
         winTest = -1;
         i = 1;
         while(i < 4)
         {
            this["h" + i].gotoAndStop(leagueList[i - 1][9]);
            if(leagueList[i - 1][9] == faceNum)
            {
               winTest = leagueList[i - 1][9];
            }
            trace("at " + (i - 1) + " is code " + leagueList[i - 1][9] + "faceNum " + (faceNum - 1));
            ++i;
         }
         h4.gotoAndStop(faceNum);
         if(winTest != -1)
         {
            h4.visible = false;
         }
         if(yourLeaguePosition == 1)
         {
            achAward.Award(12);
            finalMessage.text = String(leagueList[0][0] + " WIN the CUP !");
            extra_txt.text = String("World Cup Stars Unlocked in 2 Player !");
         }
         saveGame();
         playerScore = teamList[faceNum - 1][2] + (teamList[faceNum - 1][7] - teamList[faceNum - 1][8]);
         trace("points " + teamList[faceNum - 1][2] + "gols " + teamList[faceNum - 1][7] + "aggols " + teamList[faceNum - 1][8]);
         score_txt.text = String(yourLeaguePosition);
         score_txt2.text = String(playerScore);
         trace(leagueList[0][9] + "L L0 " + leagueList[0][0]);
         trace(leagueList[1][9] + "L L1 " + leagueList[1][0]);
         trace(leagueList[2][9] + "L L1 " + leagueList[2][0]);
         pointsGivenUp = 0;
         il = 0;
         while(il < oppScoreArray.length)
         {
            pointsGivenUp += oppScoreArray[il];
            ++il;
         }
         if(pointsGivenUp <= 40)
         {
            medal.gotoAndStop(3);
            if(pointsGivenUp <= 20)
            {
               medal.gotoAndStop(2);
               if(pointsGivenUp <= 10)
               {
                  medal.gotoAndStop(1);
               }
            }
         }
         else
         {
            medal.gotoAndStop(4);
         }
      }
      
      internal function frame40() : *
      {
         url = "http://www.mousebreaker.com/games/sportsheadsfootballchampion/highscores_sportsheadsfootballchampion.php?" + int(Math.random() * 100000);
         reqURL = new URLRequest(url);
         variables = new URLVariables();
         variables.score = playerScore;
         variables.username = playerName;
         reqURL.data = variables;
         reqURL.method = URLRequestMethod.POST;
         loader = new URLLoader(reqURL);
         loader.addEventListener(Event.COMPLETE,handleComplete);
         loader.dataFormat = URLLoaderDataFormat.VARIABLES;
         stop();
      }
      
      internal function frame41() : *
      {
         gotoAndStop("menu");
      }
   }
}

