.DEFAULT_GOAL := help
.PHONY: test help

test: ## Run test suite
	./node_modules/.bin/mocha --reporter spec
help: ## Print this helpful message!
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
