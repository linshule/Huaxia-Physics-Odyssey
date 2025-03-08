# Huaxia-Physics-Odyssey / 华夏万象·物理之道

*A 2D platformer game exploring ancient Chinese scientific achievements through physics-based adventures.*  
*一款以中国古代科学成就为核心的2D平台跳跃游戏，融合物理机制与文化传承。*

---

## Table of Contents / 目录
- [Project Overview / 项目概述](#project-overview--项目概述)  
- [Features / 游戏特点](#features--游戏特点)  
- [Technical Highlights / 技术亮点](#technical-highlights--技术亮点)  
- [Installation / 安装指南](#installation--安装指南)  

---

## Project Overview / 项目概述

**English**:  
This game is a time-traveling adventure where players unlock physics abilities (e.g., magnetic navigation, resonance waves) by collaborating with historical Chinese scientists like **Shen Kuo** and **Zhang Heng**. Built with Cocos Creator, it aims to showcase China's pre-1911 scientific legacy through experimental gameplay and cultural storytelling.

**中文**:  
本游戏以时空穿越为主线，玩家通过与中国古代科学家（如沈括、张衡）的互动，解锁磁力导航、共振音波等物理能力。使用Cocos引擎开发，以实验性关卡设计与文化叙事弘扬1911年前中华科学成就。

---

## Features / 游戏特点

### Core Mechanics / 核心机制
- **16 Physics Abilities**  
  - 基于《墨经》杠杆原理的**杠杆跃迁**，北宋沈括磁偏角衍生的**磁针引路**。  
  - Abilities like *Leverage Jump* (from *Mo Jing*) and *Magnetic Navigation* (Shen Kuo's discovery).  

- **Historical Levels**  
  - 穿越先秦至明清的12个关卡，包括东汉地动仪地宫、元代观星台等场景。  
  - 12 levels spanning from先秦 to 明清, e.g., Eastern Han Seismic Palace, Yuan Dynasty Observatory.  

### Cultural Integration / 文化融合
- **典籍收集系统**: 隐藏《梦溪笔谈》《天工开物》残页，解锁科学家传记动画。  
- **Classic Texts Collection**: Discover fragments of *Mengxi Bitan* and *Tiangong Kaiwu* to unlock animated scientist biographies.  

---

## Technical Highlights / 技术亮点

### Engine & Tools / 引擎与工具
- **Cocos Creator 3.8.5**  
  - 跨平台支持：一键发布至Web/PC/移动端。  
  - Cross-platform deployment: Web, Windows, iOS, Android.  

- **Physics Simulation**  
  - 基于Box2D实现精准物理反馈（爆炸反冲、磁极吸附）。  
  - Box2D-powered physics for explosions, magnetic forces, and gear systems.  

### Advanced Design / 进阶设计
- **动态光影渲染**: 实时计算《墨经》小孔成像路径。  
  - Real-time light rendering for "pinhole imaging" effects from *Mo Jing*.  
- **模块化技能系统**: 组件化设计支持快速扩展新能力。  
  - Modular ability system (`AbilityManager`) for easy skill expansion.  

---

## Installation / 安装指南

### Prerequisites / 环境要求
- Node.js v16+  
- Cocos Creator 3.8.5  
