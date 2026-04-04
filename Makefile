# Component Library Makefile
# Usage: cd modules/component && make <target>

GREEN := \033[0;32m
BLUE := \033[0;34m
NC := \033[0m

STORYBOOK_PORT := 6006

.PHONY: help setup install start stop build clean

help:
	@echo "$(BLUE)Component Library Commands:$(NC)"
	@echo "  make install  - Install dependencies"
	@echo "  make start    - Start Storybook dev server"
	@echo "  make stop     - Stop Storybook"
	@echo "  make build    - Build Storybook static site"
	@echo "  make clean    - Remove node_modules"

setup:
	@echo "$(BLUE)Checking system dependencies...$(NC)"
	@command -v node >/dev/null 2>&1 || { echo "Installing Node.js..."; brew install node; }
	@echo "$(GREEN)All system dependencies ready!$(NC)"

install:
	@echo "$(BLUE)Installing Component Library...$(NC)"
	npm install
	@echo "$(GREEN)Component Library ready!$(NC)"

start:
	@npx kill-port $(STORYBOOK_PORT) 2>/dev/null || true
	@echo "$(GREEN)Starting Storybook on port $(STORYBOOK_PORT)...$(NC)"
	npm run storybook

stop:
	@npx kill-port $(STORYBOOK_PORT) 2>/dev/null || true
	@echo "$(GREEN)Storybook stopped$(NC)"

build:
	@echo "$(GREEN)Building Storybook...$(NC)"
	npm run build-storybook
	@echo "$(GREEN)Storybook built to storybook-static/$(NC)"

clean:
	rm -rf node_modules package-lock.json
	@echo "$(GREEN)Cleanup complete!$(NC)"
