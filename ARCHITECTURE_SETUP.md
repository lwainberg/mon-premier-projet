# 🛡️ Manuel de Référence : L'Écosystème de Développement Laurent (2026)

**Statut : Opérationnel** | **Propriétaire : Laurent** | **Machine : Dell XPS 13**
**GitHub : github.com/lwainberg**

Ce document détaille l'infrastructure technique "Elite" installée sur cette machine. Ce setup permet à l'IA (Claude Code) de coder, tester et déployer directement depuis le terminal.

---

## 🏗️ 1. L'Architecture Globale

- **Hôte :** Windows 11.
- **Moteur :** WSL2 (Ubuntu 24.04). Isolation totale du code.
- **Shell :** Zsh + Oh My Zsh (Prompt ➜).
- **Police :** Nerd Font (Caskaydia Cove) pour les icônes Git/Fichiers.

---

## 🤖 2. Le Pilotage par IA

- **Agent :** Claude Code CLI (v2.1.49).
- **IDE :** Cursor (Connecté via `/ide cursor`).
- **Mode de travail :** Claude a les droits d'écriture, de lecture et d'exécution dans le dossier `~/dev/`.

---

## 🛠️ 3. Configuration Git & GitHub

- **Utilisateur :** Laurent Wainberg.
- **Email GitHub :** `262638721+lwainberg@users.noreply.github.com` (Configuré pour respecter la vie privée et éviter les erreurs de push GH007).
- **Outils :** Git + GitHub CLI (`gh`) pour la gestion des dépôts.

---

## 🚀 4. Routine de Lancement Rapide

1. Ouvrir Windows Terminal (Ubuntu).
2. `cd ~/dev/mon-premier-projet`
3. `cursor .`
4. `claude`
5. Dans Claude : `/ide cursor`

---

## 📜 5. Commandes de Survie

| Commande | Description |
|---|---|
| `npm run dev` | Lance le serveur local pour voir l'app. |
| `git status` | Voir l'état des fichiers. |
| `/init` | (Dans Claude) Pour rafraîchir les règles du projet. |
| `docker run hello-world` | Pour vérifier que le moteur de containers est vivant. |

---

## ✅ Ce que tu viens d'accomplir :

- **Repo créé :** `mon-premier-projet` est en ligne.
- **Premier Commit :** "Initialisation du projet React avec Claude".
- **Identité sécurisée :** Ton email réel est caché derrière ton alias GitHub.
