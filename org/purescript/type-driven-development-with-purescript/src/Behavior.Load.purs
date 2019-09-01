module Behavior.Load where

import Data.Todo
import Effect.Aff
import Prelude

import Data.Bifunctor (lmap)
import Data.Either (Either(..))
import Effect.Aff.Class (class MonadAff)
import Effect.Aff.Compat (EffectFnAff(..), fromEffectFnAff)
import Foreign (MultipleErrors)
import Simple.JSON (class ReadForeign, readJSON)

type Path = String

foreign import _get :: Path -> EffectFnAff String

ajaxGet :: forall a. ReadForeign a => Path -> Aff (Either Error a)
ajaxGet path = (lmap adaptError <<< parseJSON ) <$> fromEffectFnAff (_get path)
  where
    parseJSON :: String -> Either MultipleErrors a
    parseJSON = readJSON
    adaptError :: MultipleErrors -> Error
    adaptError = error <<< show

load :: Path -> Aff (Array Todo)
load path = do
    resp <- ajaxGetTodos path
    liftEither resp
    where
      ajaxGetTodos :: Path -> Aff (Either Error (Array Todo))
      ajaxGetTodos = ajaxGet
      
class MonadAff m <= MonadEither m where
  liftEither :: Either Error ~> m

instance monadEitherAff :: MonadEither Aff where
  liftEither (Left e) = throwError e
  liftEither (Right v) = pure v
