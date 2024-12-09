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