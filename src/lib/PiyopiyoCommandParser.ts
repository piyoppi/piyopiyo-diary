export type PostParserResult = {
  path: string;
  message: string;
}

export type FilterParserResult = {
  path: string;
}

export type ExportParserResult = {}

export interface ParserResult<T> {
  mode: ParsedType;
  data: T;
}

export enum ParsedType {
  PostMessage,
  Filter,
  Export
}

export class PiyopiyoCommandParser {
  parse(command: string): ParserResult<any> {
    const commandType = this._extractCommandType(command)
    let commandValue = commandType ? command.replace(`\\${commandType}`, '') : command

    if( commandValue.substring(0, 1) === ' ' ) commandValue = commandValue.substring(1)

    switch(commandType) {
      case 'filter':
      case 'f':
        return this._buildFilterResult(commandValue)
        break;

      case 'export':
        return this._buildExportResult(commandValue)
        break;

      default:
        return this._buildPostMessageResult(commandValue)
        break;
    }
  }

  _extractCommandType(command: string): string {
    const foundCommand = command.match(/^\\[a-zA-Z]*( |$)/)
    return foundCommand ? foundCommand[0].substring(1, foundCommand[0].length).replace(' ', '') : ''
  }

  _buildExportResult(command: string): ParserResult<ExportParserResult> {
    return {
      mode: ParsedType.Export,
      data: {}
    }
  }

  _buildFilterResult(command: string): ParserResult<FilterParserResult> {
    return {
      mode: ParsedType.Filter,
      data: {
        path: command
      }
    }
  }

  _buildPostMessageResult(command: string): ParserResult<PostParserResult> {
    const foundPath = command.match(/^.*: /)
    const path = foundPath ? foundPath[0].substring(0, foundPath[0].length - 2) : '/'
    const message = foundPath ? command.substring(foundPath[0].length) : command

    return {
      mode: ParsedType.PostMessage,
      data: {
        path,
        message
      }
    }
  }
}
