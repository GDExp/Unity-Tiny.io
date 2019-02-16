﻿/**
 * TINY GENERATED CODE, DO NOT EDIT BY HAND
 * @project Unity Tiny - Stack Jump
 */

entities.game.BlocksGroup.name = "BlocksGroup";
entities.game.BlocksGroup.load = function(world) {
    var arch0 = world.createArchetype(game.Ground, game.MoveBlock, game.Scroller, this.Component, ut.Core2D.LayerSorting, ut.Core2D.Sprite2DRenderer, ut.Core2D.TransformLocalPosition, ut.Core2D.TransformLocalRotation, ut.Core2D.TransformLocalScale, ut.Core2D.TransformNode, ut.layers.Default, ut.Physics2D.BoxCollider2D, ut.Physics2D.RigidBody2D)
    var e0 = world.createEntity(arch0);
    world.setEntityName(e0, "BlockX");
    var arch1 = world.createArchetype(game.Block, this.Component, ut.Core2D.LayerSorting, ut.Core2D.Sprite2DRenderer, ut.Core2D.TransformLocalPosition, ut.Core2D.TransformLocalRotation, ut.Core2D.TransformLocalScale, ut.Core2D.TransformNode, ut.layers.Default, ut.Physics2D.BoxCollider2D, ut.Physics2D.RigidBody2D)
    var e1 = world.createEntity(arch1);
    world.setEntityName(e1, "BlockHit");
    var c0 = new ut.Core2D.TransformNode();
    world.setComponentData(e0, c0);
    var c1 = new ut.Core2D.TransformLocalPosition();
    var s0 = new ut.Math.Vector3();
    s0.x = -20.19;
    s0.y = -5.14;
    s0.z = 0;
    c1.position = s0;
    world.setComponentData(e0, c1);
    var c2 = new ut.Core2D.TransformLocalRotation();
    var s1 = new ut.Math.Quaternion();
    s1.x = 0;
    s1.y = 0;
    s1.z = 0;
    s1.w = 1;
    c2.rotation = s1;
    world.setComponentData(e0, c2);
    var c3 = new ut.Core2D.TransformLocalScale();
    var s2 = new ut.Math.Vector3();
    s2.x = 5;
    s2.y = 1;
    s2.z = 1;
    c3.scale = s2;
    world.setComponentData(e0, c3);
    var c4 = new ut.Core2D.Sprite2DRenderer();
    var s3 = new ut.Core2D.Color();
    s3.r = 1;
    s3.g = 1;
    s3.b = 1;
    s3.a = 1;
    c4.color = s3;
    c4.blending = 0;
    world.setComponentData(e0, c4);
    var c5 = new ut.Core2D.LayerSorting();
    c5.order = 5;
    world.setComponentData(e0, c5);
    var c6 = new ut.Physics2D.RigidBody2D();
    c6.bodyType = 0;
    world.setComponentData(e0, c6);
    var c7 = new ut.Physics2D.BoxCollider2D();
    var s4 = new ut.Math.Vector2();
    s4.x = 0.95;
    s4.y = 0.25;
    c7.size = s4;
    var s5 = new ut.Math.Vector2();
    s5.x = 0.5;
    s5.y = -1;
    c7.pivot = s5;
    world.setComponentData(e0, c7);
    var c8 = new game.MoveBlock();
    c8.blockSpeed = 0.5;
    c8.move = true;
    c8.setup = true;
    world.setComponentData(e0, c8);
    var c9 = new ut.Core2D.TransformNode();
    c9.parent = e0;
    world.setComponentData(e1, c9);
    var c10 = new ut.Core2D.TransformLocalPosition();
    var s6 = new ut.Math.Vector3();
    s6.x = 0;
    s6.y = 0;
    s6.z = 0;
    c10.position = s6;
    world.setComponentData(e1, c10);
    var c11 = new ut.Core2D.TransformLocalRotation();
    var s7 = new ut.Math.Quaternion();
    s7.x = 0;
    s7.y = 0;
    s7.z = 0;
    s7.w = 1;
    c11.rotation = s7;
    world.setComponentData(e1, c11);
    var c12 = new ut.Core2D.TransformLocalScale();
    var s8 = new ut.Math.Vector3();
    s8.x = 0.9999999;
    s8.y = 1;
    s8.z = 1;
    c12.scale = s8;
    world.setComponentData(e1, c12);
    var c13 = new ut.Core2D.Sprite2DRenderer();
    var s9 = new ut.Core2D.Color();
    s9.r = 1;
    s9.g = 1;
    s9.b = 1;
    s9.a = 0;
    c13.color = s9;
    c13.blending = 0;
    world.setComponentData(e1, c13);
    var c14 = new ut.Core2D.LayerSorting();
    c14.order = 5;
    world.setComponentData(e1, c14);
    var c15 = new ut.Physics2D.RigidBody2D();
    c15.bodyType = 0;
    world.setComponentData(e1, c15);
    var c16 = new ut.Physics2D.BoxCollider2D();
    var s10 = new ut.Math.Vector2();
    s10.x = 1;
    s10.y = 0.85;
    c16.size = s10;
    var s11 = new ut.Math.Vector2();
    s11.x = 0.5;
    s11.y = 0.6;
    c16.pivot = s11;
    world.setComponentData(e1, c16);
    return [e0, e1];
}

entities.game.MainScene.name = "MainScene";
entities.game.MainScene.load = function(world) {
    var arch0 = world.createArchetype(this.Component, ut.Core2D.Camera2D, ut.Core2D.TransformLocalPosition, ut.Core2D.TransformNode, ut.EditorExtensions.CameraCullingMask, ut.layers.Default)
    var e0 = world.createEntity(arch0);
    world.setEntityName(e0, "Camera");
    var arch1 = world.createArchetype(game.InputSystem, game.Player, game.Scroller, this.Component, ut.Core2D.LayerSorting, ut.Core2D.Sprite2DRenderer, ut.Core2D.TransformLocalPosition, ut.Core2D.TransformLocalRotation, ut.Core2D.TransformLocalScale, ut.Core2D.TransformNode, ut.layers.Default, ut.Physics2D.BoxCollider2D, ut.Physics2D.RigidBody2D)
    var e1 = world.createEntity(arch1);
    world.setEntityName(e1, "Player");
    var arch2 = world.createArchetype(game.Spawner, this.Component, ut.layers.Default)
    var e2 = world.createEntity(arch2);
    world.setEntityName(e2, "Spawner");
    var arch3 = world.createArchetype(this.Component, ut.Core2D.TransformLocalPosition, ut.Core2D.TransformLocalRotation, ut.Core2D.TransformLocalScale, ut.Core2D.TransformNode, ut.layers.Default, ut.UILayout.RectTransform, ut.UILayout.UICanvas)
    var e3 = world.createEntity(arch3);
    world.setEntityName(e3, "Canvas");
    var arch4 = world.createArchetype(game.Score, this.Component, ut.Core2D.TransformLocalPosition, ut.Core2D.TransformLocalScale, ut.Core2D.TransformNode, ut.layers.Default, ut.Text.Text2DRenderer, ut.Text.Text2DStyle, ut.Text.Text2DStyleBitmapFont)
    var e4 = world.createEntity(arch4);
    world.setEntityName(e4, "Scores");
    var arch5 = world.createArchetype(game.Scroller, this.Component, ut.Core2D.TransformLocalPosition, ut.Core2D.TransformNode, ut.layers.Default)
    var e5 = world.createEntity(arch5);
    world.setEntityName(e5, "Scroll");
    var arch6 = world.createArchetype(game.Ground, game.MoveBlock, this.Component, ut.Core2D.LayerSorting, ut.Core2D.Sprite2DRenderer, ut.Core2D.TransformLocalPosition, ut.Core2D.TransformLocalRotation, ut.Core2D.TransformLocalScale, ut.Core2D.TransformNode, ut.layers.Default, ut.Physics2D.BoxCollider2D, ut.Physics2D.RigidBody2D)
    var e6 = world.createEntity(arch6);
    world.setEntityName(e6, "Block");
    var arch7 = world.createArchetype(game.Block, this.Component, ut.Core2D.LayerSorting, ut.Core2D.Sprite2DRenderer, ut.Core2D.TransformLocalPosition, ut.Core2D.TransformLocalRotation, ut.Core2D.TransformLocalScale, ut.Core2D.TransformNode, ut.layers.Default, ut.Physics2D.BoxCollider2D, ut.Physics2D.RigidBody2D)
    var e7 = world.createEntity(arch7);
    world.setEntityName(e7, "BlockHit");
    var c0 = new ut.Core2D.TransformNode();
    world.setComponentData(e0, c0);
    var c1 = new ut.Core2D.Camera2D();
    c1.halfVerticalSize = 8;
    var s0 = new ut.Math.Rect();
    s0.x = 0;
    s0.y = 0;
    s0.width = 1;
    s0.height = 2;
    c1.rect = s0;
    var s1 = new ut.Core2D.Color();
    s1.r = 0.3490566;
    s1.g = 0.3490566;
    s1.b = 0.3490566;
    s1.a = 1;
    c1.backgroundColor = s1;
    c1.clearFlags = 1;
    c1.depth = -1;
    c1.cullingMask = [ut.layers.Default.cid, ut.layers.TransparentFX.cid, ut.layers.IgnoreRaycast.cid, ut.layers.Water.cid, ut.layers.UI.cid, ut.layers.PostProcessing.cid, ut.layers.Cutscene.cid];
    c1.cullingMode = 2;
    world.setComponentData(e0, c1);
    var c2 = new ut.Core2D.TransformLocalPosition();
    var s2 = new ut.Math.Vector3();
    s2.x = 0;
    s2.y = 5.24;
    s2.z = 0;
    c2.position = s2;
    world.setComponentData(e0, c2);
    var c3 = new ut.EditorExtensions.CameraCullingMask();
    c3.mask = -1;
    world.setComponentData(e0, c3);
    var c4 = new ut.Core2D.TransformNode();
    world.setComponentData(e1, c4);
    var c5 = new ut.Core2D.TransformLocalPosition();
    var s3 = new ut.Math.Vector3();
    s3.x = -0.09;
    s3.y = 2.35;
    s3.z = 0;
    c5.position = s3;
    world.setComponentData(e1, c5);
    var c6 = new ut.Core2D.TransformLocalRotation();
    var s4 = new ut.Math.Quaternion();
    s4.x = 0;
    s4.y = 0;
    s4.z = 0;
    s4.w = 1;
    c6.rotation = s4;
    world.setComponentData(e1, c6);
    var c7 = new ut.Core2D.TransformLocalScale();
    var s5 = new ut.Math.Vector3();
    s5.x = 1;
    s5.y = 1;
    s5.z = 1;
    c7.scale = s5;
    world.setComponentData(e1, c7);
    var c8 = new ut.Core2D.Sprite2DRenderer();
    var s6 = new ut.Core2D.Color();
    s6.r = 0;
    s6.g = 0.1568628;
    s6.b = 0.6784314;
    s6.a = 1;
    c8.color = s6;
    c8.blending = 0;
    world.setComponentData(e1, c8);
    var c9 = new ut.Core2D.LayerSorting();
    c9.order = 5;
    world.setComponentData(e1, c9);
    var c10 = new ut.Physics2D.RigidBody2D();
    c10.bodyType = 2;
    c10.freezeRotation = true;
    world.setComponentData(e1, c10);
    var c11 = new ut.Physics2D.BoxCollider2D();
    var s7 = new ut.Math.Vector2();
    s7.x = 1;
    s7.y = 1;
    c11.size = s7;
    var s8 = new ut.Math.Vector2();
    s8.x = 0.5;
    s8.y = 0.5;
    c11.pivot = s8;
    world.setComponentData(e1, c11);
    var c12 = new game.InputSystem();
    c12.jumpForce = 5;
    world.setComponentData(e1, c12);
    var c13 = new game.Spawner();
    c13.plusSpeed = 1.25;
    world.setComponentData(e2, c13);
    var c14 = new ut.Core2D.TransformNode();
    world.setComponentData(e3, c14);
    var c15 = new ut.Core2D.TransformLocalPosition();
    var s9 = new ut.Math.Vector3();
    s9.x = 0;
    s9.y = 215.8524;
    s9.z = 100;
    c15.position = s9;
    world.setComponentData(e3, c15);
    var c16 = new ut.Core2D.TransformLocalRotation();
    var s10 = new ut.Math.Quaternion();
    s10.x = 0;
    s10.y = 0;
    s10.z = 0;
    s10.w = 1;
    c16.rotation = s10;
    world.setComponentData(e3, c16);
    var c17 = new ut.Core2D.TransformLocalScale();
    var s11 = new ut.Math.Vector3();
    s11.x = 0.02497076;
    s11.y = 0.02497076;
    s11.z = 0.02497076;
    c17.scale = s11;
    world.setComponentData(e3, c17);
    var c18 = new ut.UILayout.RectTransform();
    var s12 = new ut.Math.Vector2();
    s12.x = 0;
    s12.y = 0;
    c18.anchorMin = s12;
    var s13 = new ut.Math.Vector2();
    s13.x = 1;
    s13.y = 1;
    c18.anchorMax = s13;
    var s14 = new ut.Math.Vector2();
    s14.x = 0;
    s14.y = 0;
    c18.sizeDelta = s14;
    var s15 = new ut.Math.Vector2();
    s15.x = 0;
    s15.y = 0;
    c18.anchoredPosition = s15;
    var s16 = new ut.Math.Vector2();
    s16.x = 0.5;
    s16.y = 0.5;
    c18.pivot = s16;
    world.setComponentData(e3, c18);
    var c19 = new ut.UILayout.UICanvas();
    c19.camera = e0;
    c19.uiScaleMode = 1;
    var s17 = new ut.Math.Vector2();
    s17.x = 800;
    s17.y = 640;
    c19.referenceResolution = s17;
    world.setComponentData(e3, c19);
    var c20 = new ut.Core2D.TransformLocalPosition();
    var s18 = new ut.Math.Vector3();
    s18.x = 0;
    s18.y = 365;
    s18.z = 0;
    c20.position = s18;
    world.setComponentData(e4, c20);
    var c21 = new ut.Core2D.TransformLocalScale();
    var s19 = new ut.Math.Vector3();
    s19.x = 1;
    s19.y = 1;
    s19.z = 1;
    c21.scale = s19;
    world.setComponentData(e4, c21);
    var c22 = new ut.Core2D.TransformNode();
    c22.parent = e3;
    world.setComponentData(e4, c22);
    var c23 = new ut.Text.Text2DRenderer();
    c23.style = e4;
    c23.text = "00";
    var s20 = new ut.Math.Vector2();
    s20.x = 0.5;
    s20.y = 0.5;
    c23.pivot = s20;
    c23.blending = 0;
    world.setComponentData(e4, c23);
    var c24 = new ut.Text.Text2DStyle();
    var s21 = new ut.Core2D.Color();
    s21.r = 1;
    s21.g = 0.9858491;
    s21.b = 0.9858491;
    s21.a = 1;
    c24.color = s21;
    c24.size = 75;
    world.setComponentData(e4, c24);
    var c25 = new ut.Text.Text2DStyleBitmapFont();
    c25.font = ut.EntityLookupCache.getByName(world, 'assets/fonts/PixellariExtended');
    world.setComponentData(e4, c25);
    var c26 = new game.Score();
    world.setComponentData(e4, c26);
    var c27 = new ut.Core2D.TransformNode();
    world.setComponentData(e5, c27);
    var c28 = new ut.Core2D.TransformLocalPosition();
    var s22 = new ut.Math.Vector3();
    s22.x = 0;
    s22.y = 0;
    s22.z = 0;
    c28.position = s22;
    world.setComponentData(e5, c28);
    var c29 = new ut.Core2D.TransformNode();
    c29.parent = e5;
    world.setComponentData(e6, c29);
    var c30 = new ut.Core2D.TransformLocalPosition();
    var s23 = new ut.Math.Vector3();
    s23.x = 0.324;
    s23.y = 0;
    s23.z = 0;
    c30.position = s23;
    world.setComponentData(e6, c30);
    var c31 = new ut.Core2D.TransformLocalRotation();
    var s24 = new ut.Math.Quaternion();
    s24.x = 0;
    s24.y = 0;
    s24.z = 0;
    s24.w = 1;
    c31.rotation = s24;
    world.setComponentData(e6, c31);
    var c32 = new ut.Core2D.TransformLocalScale();
    var s25 = new ut.Math.Vector3();
    s25.x = 17.77329;
    s25.y = 1;
    s25.z = 1;
    c32.scale = s25;
    world.setComponentData(e6, c32);
    var c33 = new ut.Core2D.Sprite2DRenderer();
    var s26 = new ut.Core2D.Color();
    s26.r = 1;
    s26.g = 1;
    s26.b = 1;
    s26.a = 1;
    c33.color = s26;
    c33.blending = 0;
    world.setComponentData(e6, c33);
    var c34 = new ut.Core2D.LayerSorting();
    c34.order = 5;
    world.setComponentData(e6, c34);
    var c35 = new ut.Physics2D.RigidBody2D();
    c35.bodyType = 0;
    world.setComponentData(e6, c35);
    var c36 = new ut.Physics2D.BoxCollider2D();
    var s27 = new ut.Math.Vector2();
    s27.x = 1;
    s27.y = 0.25;
    c36.size = s27;
    var s28 = new ut.Math.Vector2();
    s28.x = 0.5;
    s28.y = -1;
    c36.pivot = s28;
    world.setComponentData(e6, c36);
    var c37 = new game.MoveBlock();
    world.setComponentData(e6, c37);
    var c38 = new ut.Core2D.TransformNode();
    c38.parent = e6;
    world.setComponentData(e7, c38);
    var c39 = new ut.Core2D.TransformLocalPosition();
    var s29 = new ut.Math.Vector3();
    s29.x = 0;
    s29.y = 0;
    s29.z = 0;
    c39.position = s29;
    world.setComponentData(e7, c39);
    var c40 = new ut.Core2D.TransformLocalRotation();
    var s30 = new ut.Math.Quaternion();
    s30.x = 0;
    s30.y = 0;
    s30.z = 0;
    s30.w = 1;
    c40.rotation = s30;
    world.setComponentData(e7, c40);
    var c41 = new ut.Core2D.TransformLocalScale();
    var s31 = new ut.Math.Vector3();
    s31.x = 0.9999999;
    s31.y = 1;
    s31.z = 1;
    c41.scale = s31;
    world.setComponentData(e7, c41);
    var c42 = new ut.Core2D.Sprite2DRenderer();
    var s32 = new ut.Core2D.Color();
    s32.r = 1;
    s32.g = 1;
    s32.b = 1;
    s32.a = 0;
    c42.color = s32;
    c42.blending = 0;
    world.setComponentData(e7, c42);
    var c43 = new ut.Core2D.LayerSorting();
    c43.order = 5;
    world.setComponentData(e7, c43);
    var c44 = new ut.Physics2D.RigidBody2D();
    c44.bodyType = 0;
    world.setComponentData(e7, c44);
    var c45 = new ut.Physics2D.BoxCollider2D();
    var s33 = new ut.Math.Vector2();
    s33.x = 1;
    s33.y = 0.75;
    c45.size = s33;
    var s34 = new ut.Math.Vector2();
    s34.x = 0.5;
    s34.y = 0.65;
    c45.pivot = s34;
    world.setComponentData(e7, c45);
    return [e0, e1, e2, e3, e4, e5, e6, e7];
}

