module Behavior.Add where

import Data.Array
import Data.Todo
import Effect.Aff
import Prelude

import Effect.Aff.Compat (EffectFnAff(..), fromEffectFnAff)
import Simple.JSON (class WriteForeign, writeJSON)

addTodo :: Todo -> State -> Aff State
addTodo todo state = do
  status <- ajaxPost "https://jsonplaceholder.typicode.com/todos" todo
  case status of
    201 -> pure $ state {todos = todo : state.todos}
    _ -> pure state

foreign import _post :: Path -> String -> EffectFnAff Int

ajaxPost :: forall a. WriteForeign a => Path -> a -> Aff Int
ajaxPost path body = fromEffectFnAff (_post path $ writeJSON body)
